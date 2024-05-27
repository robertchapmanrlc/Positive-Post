import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import MessageColumns from "./components/messageColumns";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/posting");
  }

  return (
    <main className="w-full py-5 flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-text text-4xl md:text-7xl text-center">
        Positivity Post
      </h1>
      <h3 className="text-text text-sm sm:text-lg md:text-xl lg:text-2xl text-center">
        Positiviy can go a long way.
      </h3>
      <MessageColumns />
      <SignInButton
        forceRedirectUrl="/voting"
        signUpFallbackRedirectUrl="/voting"
      >
        <button className="w-24 p-2 rounded-md bg-primary hover:bg-hover active:bg-active text-background">
          Sign In
        </button>
      </SignInButton>
    </main>
  );
}
