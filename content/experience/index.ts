import type { IExperienceMeta } from "../types";

export const experience: IExperienceMeta[] = [
  {
    id: "pixel38",
    company: "Pixel38",
    role: "Full Stack Developer",
    startDate: "2024-07",
    endDate: null,
    location: "Beirut, Lebanon",
    summary:
      "Carrying a multi-tenant shipment platform end-to-end, with side work spanning a real-time food-delivery backend, a queue-based ERP invoice integration, a Dahua DSS camera bridge, and a multi-tenant agentic customer-support platform on LangChain and LangGraph.",
  },
  {
    id: "slashml",
    company: "SlashML",
    role: "Full Stack Developer",
    startDate: "2024-04",
    endDate: "2024-07",
    location: "Remote",
    summary:
      "A three-month stint building queue-based, Pulumi-driven EC2 provisioning so LLM workloads could spin up on demand without breaking the running fleet.",
  },
];
