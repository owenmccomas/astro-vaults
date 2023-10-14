import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  const user = useSession().data?.user;

  return (
    <header className="sticky top-0 z-40 w-full bg-black">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div>
          <Link href={"/"}>
            <Image
              src={"/favicon.ico"}
              width={60}
              height={60}
              className="rounded-sm"
              alt="astrocratelogo"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href="/drops"
              className="mt-1 rounded-full bg-black px-5 py-3 font-bold text-white no-underline transition hover:bg-white hover:text-black"
            >
              Crates
            </Link>
            <Link
              href="/inventory"
              className="mx-2 mt-1 rounded-full bg-black px-5 py-3 font-bold text-white no-underline transition hover:bg-white hover:text-black"
            >
              Inventory
            </Link>
            <AuthShowcase />
          </nav>
        </div>
      </div>
    </header>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div className="mb-1 flex flex-col items-center justify-center gap-4">
      <button
        className="mt-2 rounded-full bg-black px-5 py-3 font-bold text-white no-underline transition hover:bg-white hover:text-black"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
