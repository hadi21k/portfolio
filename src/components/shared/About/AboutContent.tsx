import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const AboutContent = () => {
  return (
    <div className="max-w-3xl space-y-10 py-8 font-medium leading-normal sm:text-lg">
      <p>
        As an accomplished full-stack architect, I draw inspiration from a
        ceaseless drive to engineer inventive solutions and harness the
        forefront of technological advancements. Rooted in the dynamic realms of
        JavaScript, TypeScript, React, and Node.js, augmented by a rich tapestry
        of experience with a diverse toolkit, I excel in unraveling intricate
        puzzles and orchestrating outcomes that transcend expectations.
      </p>
      <p>
        With a robust background in full-stack development, I bring a wealth of
        experience to the table. Proficient in JavaScript, TypeScript, React,
        and Node.js, I&apos;ve led diverse projects, delivering solutions that
        surpass expectations. Specializing in architecting resilient
        infrastructures, my expertise ensures peak performance and reliability.
        Moreover, my soft skills, including innovation and effective
        communication, drive collaborative success and contribute to meaningful
        projects.
      </p>
      <p>
        As technology continues its relentless evolution, I remain steadfast in
        my dedication to perpetual growth and innovation. Whether I&apos;m
        delving into the latest advancements in JavaScript frameworks or
        exploring emerging trends in cloud computing, I thrive on expanding my
        repertoire and pushing the boundaries of what&apos;s achievable. With an
        unyielding commitment to excellence, I eagerly embrace new opportunities
        to lend my expertise to transformative endeavors.
      </p>
      <Separator className="bg-gray-200" />
      <div>
        <h1 className="mb-2 text-2xl">FAQ</h1>
        <ol className="list-disc px-5">
          <li>I&apos;m from Beirut, Lebanon.</li>
          <li>Born in July, 2003.</li>
          <li>
            Started my career in 2021 through learning aside with my university.
          </li>
          <li>I love to learn new things and I&apos;m always curious.</li>
        </ol>
      </div>
      <Separator className="bg-gray-200" />
      <div>
        <h1 className="mb-2 text-2xl">Social Media</h1>
        <ul className="list-disc px-5">
          <li>
            <Link
              className="text-blue-500 underline-offset-2 hover:underline"
              href="https://www.instagram.com/hadidiiab"
            >
              Instagram
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500 underline-offset-2 hover:underline"
              href="https://twitter.com/hadidiabb"
            >
              Twitter
            </Link>
          </li>
          <li>
            <Link
              className="text-blue-500 underline-offset-2 hover:underline"
              href="https://github.com/hadi21k"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutContent;
