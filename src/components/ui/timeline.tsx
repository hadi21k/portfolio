"use client";
import { useScroll, useTransform, motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";

interface TimelineEntryProps {
  title: string;
  content: React.ReactNode;
  index: number;
  total: number;
  scrollYProgress: any;
}

const TimelineEntry = ({
  title,
  content,
  index,
  total,
  scrollYProgress,
}: TimelineEntryProps) => {
  const start = index / total;
  const end = (index + 1) / total;
  const progress = useTransform(scrollYProgress, [start, end], [0, 1]);
  const backgroundColor = useTransform(
    progress,
    [0, 0.3],
    ["rgb(255, 255, 255)", "rgb(234, 179, 8)"],
  );

  return (
    <div className="flex justify-start pt-10 md:gap-10 md:pt-40">
      <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
        <motion.div
          className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black md:left-3"
          style={{
            backgroundColor,
          }}
        />
        <h3 className="hidden text-xl font-bold text-white md:block md:pl-20 md:text-sm ">
          {title}
        </h3>
      </div>

      <div className="relative w-full pl-20 pr-4 md:pl-4">
        <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500 md:hidden">
          {title}
        </h3>
        {content}{" "}
      </div>
    </div>
  );
};

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-black" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item, index) => (
          <TimelineEntry
            key={index}
            title={item.title}
            content={item.content}
            index={index}
            total={data.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700  md:left-8 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-yellow-600"
          />
        </div>
      </div>
    </div>
  );
};
