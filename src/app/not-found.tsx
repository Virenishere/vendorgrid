"use client";

import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-950 px-4">
        <p className="text-sm font-medium text-purple-400 dark:text-purple-600">404 - Not Found</p> 
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
        Page not found
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for doesn&apos;t exist.
        </p>
        <div className="flex items-center mt-6 gap-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center px-4 py-2 text-sm text-gray-700 bg-white border rounded-lg dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 cursor-pointer"
        >
          <MoveLeft className="mr-2 h-4 w-4" />
          Go back
        </button>

        <Link
          href="/"
          className="px-4 py-2 text-sm text-white bg-purple-400 rounded-lg hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-500"
        >
          Take me home
        </Link>
      </div>     
    </section>
  );
}
