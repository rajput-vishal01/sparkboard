import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  // Fetch the current session
  const session = await auth();

  return (
    <header className="bg-[#201A23] text-[#FBFBFB]">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Main logo/link with hover accent */}
        <Link href="/" className="text-2xl font-bold hover:text-[#8D89A6] transition duration-300">
          Sparkboard
        </Link>
        <div className="flex items-center space-x-4">
          {session && session.user ? (
            <>
              
              <Link href="/startup/create" className="hover:text-[#8D89A6] transition duration-300">
                Create
              </Link>

              {/* Logout form using a server action */}
              <form
                action={async () => {
                  "use server";
                  await signOut({
                    redirectTo: "/",
                  });
                }}
              >
                <button
                  type="submit"
                  className="bg-[#D64550] hover:bg-[#8D89A6] text-[#FBFBFB] font-semibold py-2 px-4 rounded transition duration-300">
                  Logout
                </button>
              </form>

             
              <Link
                href={`/user/${session.user.id}`}
                className="hover:text-[#8D89A6] transition duration-300">
                {session.user.name}
              </Link>
            </>
          ) : (
            <>
              {/* Login form using a server action */}
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button
                  type="submit"
                  className="bg-[#D64550] hover:bg-[#8D89A6] text-[#FBFBFB] font-semibold py-2 px-4 rounded transition duration-300">
                  Login
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;