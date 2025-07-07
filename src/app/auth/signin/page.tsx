"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Flame } from "lucide-react";
import Image from "next/image";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGoogleSignup = async () => {
    setIsLoading(true);
    try {
      await signIn("google", {
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      alert("Google sign-up failed.");
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-grad-effect min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 p-4">
      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-md shadow-md rounded-lg p-6 text-center">
        <div className="w-12 h-12 mx-auto mb-4 bg-purple-600 rounded-lg flex items-center justify-center">
          <Flame className="w-6 h-6 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
        <p className="text-sm text-white/70 mb-6">
          Sign up using your Google account
        </p>

        <button
          onClick={handleGoogleSignup}
          disabled={isLoading}
          className="relative w-full flex items-center justify-center gap-3 px-5 py-2 rounded-md border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 text-white font-semibold shadow-md
    hover:bg-white/20 hover:shadow-[0_0_20px_5px_rgba(192,132,252,0.3)]
    active:scale-95 cursor-pointer"
        >
          {isLoading ? (
            "Redirecting..."
          ) : (
            <>
              <Image
                src="/googleicon.svg"
                alt="googlelogo"
                width={22}
                height={22}
              />
              Sign up with Google
            </>
          )}
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-md pointer-events-none border border-purple-400/30 blur-[2px]" />
        </button>

        <p className="mt-6 text-sm text-slate-950">
          Already have an account?{" "}
          <a href="/auth/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

