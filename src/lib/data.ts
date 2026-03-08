export const data = {
  name: "Your Name",
  title: "Software Engineer",
  location: "Your City, Country",
  email: "hello@yourname.dev",
  bio: [
    "I'm a software engineer with 5+ years of experience across the full stack. I care about systems that are simple to reason about, easy to change, and a pleasure for other engineers to work in.",
    "My background spans backend architecture, API design, and frontend development. I've worked at early-stage startups owning features end-to-end and at larger companies focused on platform reliability and developer tooling.",
    "I write clean, tested code — and I know when not to over-engineer things.",
  ],
  facts: [
    { key: "Location", value: "Your City, Country" },
    { key: "Experience", value: "5+ years" },
    { key: "Focus", value: "Full-stack / Backend" },
    { key: "Education", value: "B.Sc. Computer Science" },
    { key: "Status", value: "Open to opportunities", highlight: true },
  ],
  stats: [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects Shipped" },
    { value: "3", label: "Companies" },
    { value: "∞", label: "Bugs Fixed" },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "Python", "Go", "SQL"],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "FastAPI", "GraphQL"],
    },
    {
      category: "Data & Storage",
      items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch"],
    },
    {
      category: "Cloud & Infra",
      items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
    },
    {
      category: "Practices",
      items: ["TDD", "CI/CD", "System Design", "Code Review"],
    },
  ],
  projects: [
    {
      index: "01",
      title: "Project Alpha",
      description:
        "A real-time collaboration platform built for scale. Event-driven architecture handles thousands of concurrent sessions with sub-100ms latency across global regions.",
      tags: ["Next.js", "Node.js", "Redis", "PostgreSQL", "WebSockets"],
      live: "#",
      github: "#",
    },
    {
      index: "02",
      title: "Project Beta",
      description:
        "Open-source CLI toolkit for automating developer workflows. Plugin architecture with a rich terminal UI. Used by 2K+ developers across hundreds of projects.",
      tags: ["Go", "CLI", "Open Source"],
      live: null,
      github: "#",
    },
    {
      index: "03",
      title: "Project Gamma",
      description:
        "Analytics pipeline processing millions of events per day. Built for reliability with automatic failover, dead-letter queues, and real-time dashboards.",
      tags: ["Python", "Kafka", "React", "Spark", "AWS"],
      live: "#",
      github: "#",
    },
  ],
  experience: [
    {
      period: "20XX — Present",
      role: "Senior Software Engineer",
      company: "Company Name",
      type: "Full-time",
      description:
        "Led architecture of a distributed microservices platform serving 10M+ users. Mentored a team of 4 engineers and drove adoption of TypeScript and testing best practices. Reduced incident rate by 60% through improved observability.",
    },
    {
      period: "20XX — 20XX",
      role: "Software Engineer",
      company: "Company Name",
      type: "Full-time",
      description:
        "Full-stack development on core product features. Improved API response times by 40% through targeted caching. Shipped a payments integration now used by 50K+ customers.",
    },
    {
      period: "20XX",
      role: "Engineering Intern",
      company: "Company Name",
      type: "Internship",
      description:
        "Built internal tooling that cut deployment time from 30 minutes to under 5. Presented to engineering leadership and was adopted company-wide within one quarter.",
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Twitter", href: "https://twitter.com" },
  ],
};
