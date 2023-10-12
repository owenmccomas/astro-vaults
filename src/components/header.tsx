import { api } from "~/utils/api";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const user = useSession().data?.user;

  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Sheet>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <AuthShowcase />
            </nav>
          </div>
          <SheetContent className="flex flex-col justify-between">
            <SheetHeader className="mt-10">
              <img
                width={120}
                className="mx-auto rounded-full"
                src={`${user?.image}`}
              />
              <SheetTitle className="text-center">{user?.name}</SheetTitle>
            </SheetHeader>
            <SheetDescription>
              {`We think you're pretty cool. Here some stuff about you`}
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function AuthShowcase() {
    const { data: sessionData } = useSession();
  
    const { data: secretMessage } = api.example.getSecretMessage.useQuery(
      undefined, // no input
      { enabled: sessionData?.user !== undefined },
    );
  
    return (
        <div className="flex flex-col items-center justify-center gap-4 mb-1">
        <button
          className="mt-2 rounded-full bg-black px-10 py-3 font-semibold text-white no-underline transition hover:bg-white hover:text-black"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          {sessionData ? "Sign out" : "Sign in"}
        </button>
      </div>
    );
  }