import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import PositivityForm from "../../components/posit-form";
import { alreadyPosted } from "../../actions/getMessage";


export default async function PostMessage() {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const posted = await alreadyPosted();
  if (posted) {
    redirect('/message');
  }

  return (
    <main className="w-full py-5 flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-text text-4xl md:text-7xl text-center">
        Positivity Post
      </h1>
      <h3 className="text-text text-sm sm:text-lg md:text-xl lg:text-2xl text-center">
        Write something positive for someone
      </h3>
      <PositivityForm>
        <textarea
          name="message"
          className="h-52 p-4 text-text placeholder:text-text/40 rounded-lg bg-secondary focus:outline-accent"
          maxLength={1000}
          required
          placeholder="Your message"
        />
        <button
          type="submit"
          className="py-2 px-3 text-background bg-primary hover:bg-hover active:bg-active rounded-md"
        >
          Submit
        </button>
      </PositivityForm>
    </main>
  );
}
