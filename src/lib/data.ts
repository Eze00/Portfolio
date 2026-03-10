const data = {
  name: "Ezedine Kargougou",
  title: "Full-Stack Engineer",
  location: "Greater Phoenix Area, Arizona",
  email: "keze2000@outlook.com",
  bio: "I'm a software engineer with 3+ years of experience across the full stack. My background spans backend architecture, API design, and frontend development.",
  facts: [
    { key: "Location", value: "Greater Phoenix Area, Arizona" },
    { key: "Experience", value: "3+ years" },
    { key: "Focus", value: "Full-stack | Front-end | Back-end" },
    { key: "Education", value: "B.s. Computer Science" },
    { key: "Status", value: "Open to opportunities", highlight: true },
  ],
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "8+", label: "Projects Shipped" },
    { value: "3", label: "Companies" },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "C#", "Python"],
    },
    { category: "Frontend", items: ["React", "Next.js"] },
    { category: "Backend", items: [".NET", "Node.js", "Express", "GraphQL"] },
    {
      category: "Data & Storage",
      items: ["PostgreSQL", "Microsoft SQL Server", "MongoDB"],
    },
    { category: "Practices", items: ["TDD", "CI/CD", "Agile"] },
    { category: "Tools", items: ["Figma", "Azure", "AWS"] },
  ],
  shippedProjects: [
    {
      index: "01",
      title: "Help Me Create",
      description:
        "Help me create leverages the power of large language models (LLMs) through Microsoft 365 Copilot to assist you in crafting the initial draft of the content you want, while also suggesting different Microsoft 365 apps that are suitable for the kind of content you have.",
      tags: ["React", "TypeScript", "Azure", "LLM", "WebSockets"],
      learnMore:
        "https://techcommunity.microsoft.com/blog/microsoft365copilotblog/try-new-ways-of-working-with-help-me-create-in-the-microsoft-365-web-app/4071000",
      preview: "/HMC.mp4",
    },
    {
      index: "02",
      title: "Meeting Prep",
      description:
        'When you have an upcoming meeting, Copilot proactively shows you a "Prepare" button in your inbox which helps you quickly get context by creating a summary of the meeting and showing and summarizing relevant files.',
      tags: [".NET", "C#", "React", "TypeScript", "CI/CD"],
      learnMore:
        "https://supersimple365.com/prepare-for-your-meeting-with-microsoft-365-copilot-and-outlook/",
      preview: "/Meeting-prep.gif",
    },
    {
      index: "03",
      title: "ContextIQ",
      description:
        "Copilot chat provides a command-triggered search experience that allows users to query organizational context across people, files, messages, emails, and meetings.",
      tags: ["React", "TypeScript"],
      learnMore: "#",
      preview: "/CIQ-demo.gif",
    },
  ],
  experience: [
    {
      period: "2022 — 2025",
      role: "Software Engineer",
      company: "Microsoft",
      type: "Full-time",
      logo: "/microsoft logo.png",
      description:
        'When you have an upcoming meeting, Copilot proactively shows you a "Prepare" button in your inbox which helps you quickly get context by creating a summary of the meeting and showing and summarizing relevant files.',
    },
    {
      period: "2022",
      role: "Front-end Engineer Intern",
      company: "Microsoft",
      type: "Internship",
      logo: "/microsoft logo.png",
      description:
        'When you have an upcoming meeting, Copilot proactively shows you a "Prepare" button in your inbox which helps you quickly get context by creating a summary of the meeting and showing and summarizing relevant files.',
    },
    {
      period: "2022",
      role: "Back-end Engineer",
      company: "Cerebrum Corp",
      type: "Part-time",
      logo: "/Cerebrum Corp logo.png",
      description:
        'When you have an upcoming meeting, Copilot proactively shows you a "Prepare" button in your inbox which helps you quickly get context by creating a summary of the meeting and showing and summarizing relevant files.',
    },
    {
      period: "2021",
      role: "Full-stack Engineer Intern",
      company: "Choice Hotels International",
      type: "Internship",
      logo: "/choice hotels logo.jpeg",
      description:
        'When you have an upcoming meeting, Copilot proactively shows you a "Prepare" button in your inbox which helps you quickly get context by creating a summary of the meeting and showing and summarizing relevant files.',
    },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Eze00" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/eze00" },
  ],
};

export default data;
