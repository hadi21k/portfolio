import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

const AboutContent = () => {
  return (
    <div className="max-w-3xl space-y-10 py-8 font-medium leading-normal sm:text-lg">
      <p>
        I am a Full Stack Developer specializing in building scalable, real-time
        applications. With a strong foundation in TypeScript, React, Node.js,
        and Laravel, I focus on creating clean architecture and solving complex
        challenges with efficient code. My work is driven by a passion for
        leveraging technology to deliver robust solutions in demanding
        environments like logistics and AI infrastructure.
      </p>
      <p>
        In my recent roles, I have engineered enterprise-grade systems from the
        ground up. At Pixel38, I architected the backend for a real-time food
        delivery platform and modernized a legacy shipment system, cutting
        technical debt by 40%. At SlashML, I designed a queue-based system to
        dynamically deploy AI models on EC2, showcasing my ability to work at
        the intersection of backend development and cloud infrastructure.
      </p>
      <p>
        I am committed to continuous learning and am always exploring the latest
        advancements in software development. My goal is to apply my skills to
        transformative projects and collaborate with teams that are pushing the
        boundaries of what&apos;s possible.
      </p>
      <Separator className="bg-gray-200" />
      <div>
        <h1 className="mb-2 text-2xl">Quick Facts</h1>
        <ul className="list-disc space-y-1 px-5">
          <li>Based in Beirut, Lebanon.</li>
          <li>Began my software development journey in 2021.</li>
          <li>Holds the AWS Certified Cloud Practitioner certification.</li>
          <li>Passionate about problem-solving and lifelong learning.</li>
        </ul>
      </div>
      <Separator className="bg-gray-200" />
      <div>
        <h1 className="mb-2 text-2xl">Connect with Me</h1>
        <ul className="list-disc space-y-1 px-5">
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
