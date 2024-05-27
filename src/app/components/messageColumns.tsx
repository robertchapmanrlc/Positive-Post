const SAMPLE_MESSAGES = [
  "You're doing great!",
  "Keep going!",
  "You are amazing!",
  "The come back is always greater than the setback.",
  "Manifest the success.",
  "YGT(You Got This)",
  "You've done a fantastic job!",
  "You feel great. You can win. YOU. CAN. DO. THIS.",
  "You're doing super. Keep it up.",
  "You're awesome!",
  "Today is the start of an amazing day!",
  "Wonderful things are just around the corner.",
];

export default function MessageColumns() {
  return (
    <section className="flex flex-col w-full p-5">
      {SAMPLE_MESSAGES.map((message, i) => (
        <div key={i} className=" bg-primary max-w-xs h-52 p-3 rounded-md">
          {message}
        </div>
      ))}
    </section>
  );
}
