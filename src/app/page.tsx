import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-grad-effect min-h-screen text-white font-sans">
      <div className="flex flex-col items-center justify-center h-[90vh] px-4 text-center">
        <h1 className="text-6xl font-extrabold mb-2 bg-gradient-to-r from-purple-300 via-purple-400 to-purple-700 text-transparent bg-clip-text drop-shadow-md animate-fade-in">
          VendorGrid
        </h1>
        <h2 className="text-2xl font-light mb-6 tracking-wide opacity-90 animate-fade-in delay-200">
          Your gateway to effortless vendor management.
        </h2>

        <div className="mb-8">
          <h3 className="text-lg font-medium opacity-80">
            Please Signup or Signin to use it 👇
          </h3>
        </div>

        <div className="flex gap-6 items-center justify-center flex-wrap">
          <Link href="/auth/signin">
            <button className="px-6 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-md hover:bg-white/20 transition duration-300 cursor-pointer hover:scale-105">
              Signup
            </button>
          </Link>
          <Link href="/auth/signin">
            <button className="px-6 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md text-white shadow-md hover:bg-white/20 transition duration-300 cursor-pointer hover:scale-105">
              Signin
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
