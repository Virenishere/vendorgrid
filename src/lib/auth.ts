import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';
import dbConnect from './mongodb';
import User from '../models/User';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        await dbConnect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (!user) return null;

          const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          if (!isPasswordValid) return null;

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        } catch (error) {
          console.error('Error in credentials authorize:', error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  //jwt logic
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id || token.sub;
      }
      if (account?.provider === 'google') {
        await dbConnect();
        const existingUser = await User.findOne({ email: token.email });

        if (!existingUser) {
          const newUser = await User.create({
            name: token.name,
            email: token.email,
            password: '',
          });
          token.id = newUser._id.toString();
        } else {
          token.id = existingUser._id.toString();
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user && token?.id) {
        (session.user as { id: string }).id = token.id as string;
      }
      return session;
    },
  },
};
