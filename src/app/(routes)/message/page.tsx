import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getMessage } from "../../actions/getMessage";

export default async function PositiveMessage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const message = await getMessage();

  return (
    <main className="w-full py-5 flex flex-col justify-center items-center gap-y-5">
      <h3 className="text-text text-center text-xl">
        Thanks for sending a message!
        <br />
        Here&apos;s one for you.
      </h3>
      <section className="w-full max-h-80 p-3 rounded-md bg-primary max-w-xs sm:max-w-lg md:max-w-2xl">
        <p className="text-background text-left">{message}</p>
      </section>
    </main>
  );
}
