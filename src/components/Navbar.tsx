"use client";

import { Flame, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="pt-10 px-4">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-between bg-white/5 border border-white/10 backdrop-blur-md items-center m-auto px-8 py-6 w-3/5 rounded-full shadow-md">
          <Link href="/">
        <div className="flex flex-row space-x-2.5 items-center cursor-pointer">
            <h2 className="text-white font-semibold text-lg">VendorGrid</h2>
            <Flame className="w-6 h-6 text-yellow-500" />
        </div>
          </Link>

        <div className="flex items-center space-x-4">
          {session?.user && (
            <>
              <p className="text-white font-semibold">{session.user.email}</p>
              {session.user.image && (
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
            </>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center text-white bg-white/5 border border-white/10 backdrop-blur-md font-semibold px-4 py-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
          >
            Logout <LogOut className="w-4 h-4 ml-2 text-red-500" />
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden fixed bottom-0 left-0 right-0 justify-between items-center bg-white/5 border-t-2 border-white/10 backdrop-blur-md px-6 py-10 rounded-t-2xl z-50 shadow-md">
        <div className="flex space-x-2 items-center">
          <Flame className="w-10 h-10 text-yellow-500" />
        </div>
        {session?.user && (
          <p className="text-white text-base font-semibold truncate max-w-[160px] text-center">
            {session.user.email}
          </p>
        )}
        <button
          onClick={handleLogout}
          className="p-2 rounded-full border border-white/10 backdrop-blur-md bg-white/5 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        >
          <LogOut className="w-8 h-8 text-red-500" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
