export default function Home() {
  return (
    <main className="w-full py-5 flex flex-col justify-center items-center gap-y-5">
      <h1 className="text-text text-4xl md:text-7xl text-center">Positivity Post</h1>
      <h3 className="text-text text-sm sm:text-lg md:text-xl lg:text-2xl text-center">Write something positive for someone</h3>
      <form action="" className="w-full max-w-xs sm:max-w-lg md:max-w-2xl flex flex-col gap-y-5">
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
      </form>
    </main>
  );
}
