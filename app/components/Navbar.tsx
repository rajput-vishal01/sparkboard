import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="bg-black-200 text-white-100 font-work-sans">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <Link href="/" className="hover:text-secondary transition duration-300">
          Sparkboard
        </Link>
        <div className="flex items-center space-x-4">
          {session && session.user ? (
            <>
              <Link
                href="/startup/create"
                className="hover:text-secondary transition duration-300">
                Create
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}>
                <button
                  type="submit"
                  className="bg-primary hover:brightness-90 text-white-100 py-2 px-4 rounded transition duration-300">
                  Logout
                </button>
              </form>
              <Link
                href={`/user/${session.user.id}`}
                className="hover:text-secondary transition duration-300">
                {session.user.name}
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}>
              <button
                type="submit"
                className="bg-primary hover:brightness-90 text-white-100 py-2 px-4 rounded transition duration-300">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
