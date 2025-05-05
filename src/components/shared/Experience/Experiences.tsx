"use client";
import H1 from "@/components/ui/h1";
import { Timeline } from "@/components/ui/timeline";

const Experiences = () => {
  const data = [
    {
      title: "July 2024 — Current",
      content: (
        <div className="mb-8 text-white md:text-base">
          <h3 className="mb-4 text-xl font-semibold">
            Full Stack Developer | Pixel38
          </h3>
          <p className="space-y-2">
            <span>
              Refactored and modernized a large shipment-management codebase,
              slashing technical debt by ~40%.
            </span>
            <br />
            <span>
              Diagnosed and resolved critical bugs, cutting reported issues by
              30%.
            </span>
            <br />
            <span>
              Integrated SAP invoice syncing via a queue-based architecture for
              rock-solid reliability.
            </span>
            <br />
            <span>
              Contributed key features to a Laravel-powered inspection system
              for core operations.
            </span>
            <br />
            <span>
              Led architecture planning and peer code reviews to keep
              development aligned with business goals.
            </span>
            <br />
          </p>
        </div>
      ),
    },
    {
      title: "April 2024 — July 2024",
      content: (
        <div className="mb-8 text-white md:text-base">
          <h3 className="mb-4 text-xl font-semibold">
            Full Stack Developer | SlashML
          </h3>
          <p className="space-y-2">
            <span>
              Built a queue-driven system to dynamically spin up EC2 instances
              for AI/LLM workloads.
            </span>
            <br />
            <span>
              Enabled scalable ML pipelines with infrastructure-as-code
              provisioning.
            </span>
            <br />
            <span>
              Partnered with DevOps to streamline cloud integration and CI/CD
              deployments.
            </span>
            <br />
            <span>
              Authored clear, living technical documentation to accelerate
              onboarding and upkeep.
            </span>
            <br />
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="py-10 mb-8">
      <div className="container max-sm:px-1">
        <H1 className="text-3xl md:text-4xl">Experience</H1>
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experiences;
