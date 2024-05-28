"use client";

import { useState, useRef, useEffect, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

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

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;

    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}

function MessageColumn({
  messages,
  className,
  columnClassName,
  msPerPixel = 0,
}: {
  messages: string[];
  className?: string;
  columnClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {messages.concat(messages).map((message, index) => (
        <Message
          key={index}
          message={message}
          className={columnClassName?.(index % messages.length)}
        />
      ))}
    </div>
  );
}

interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
}

function Message({ message, className, ...props }: MessageProps) {
  const ANIMATION_DELAYS = ["0s", "0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];

  const animationDelay =
    ANIMATION_DELAYS[Math.floor(Math.random() * ANIMATION_DELAYS.length)];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-md max-w-xs h-24 bg-primary p-3 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      {message}
    </div>
  );
}

export default function MessageColumns() {
  const columns = splitArray(SAMPLE_MESSAGES, 4);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = columns[2];
  const column4 = columns[3];

  return (
    <div className="relative grid items-start gap-8 overflow-hidden px-4 h-96 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <MessageColumn
        messages={[...column1, ...column3, ...column4, ...column2]}
        columnClassName={(messageIndex) =>
          cn({
            "md:hidden": messageIndex >= column1.length + column3.length,
            "lg:hidden": messageIndex >= column1.length,
          })
        }
        msPerPixel={8}
      />
      <MessageColumn
        messages={[...column2, ...column3, ...column2]}
        className="hidden sm:block"
        columnClassName={(messageIndex) =>
          cn({
            "lg:hidden": messageIndex >= column2.length,
          })
        }
        msPerPixel={12}
      />
      <MessageColumn
        messages={[...column3, ...column4]}
        className="hidden md:block"
        columnClassName={(messageIndex) =>
          cn({
            "lg:hidden": messageIndex >= column4.length,
          })
        }
        msPerPixel={16}
      />
      <MessageColumn
        messages={[...column4]}
        className="hidden lg:block"
        columnClassName={(messageIndex) =>
          cn({
            "lg:hidden": messageIndex >= column4.length,
          })
        }
        msPerPixel={20}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background" />
    </div>
  );
}
