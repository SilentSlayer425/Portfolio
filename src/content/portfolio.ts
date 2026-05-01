export const profile = {
  name: "Nathan Sai Lachmaiya",
  initials: "NSL",
  role: "Software Engineer",
  roles: ["Software Engineer", "Builder", "Tinkerer", "Designer-leaning Dev"],
  tagline:
    "I design and build calm, considered software — with a soft spot for thoughtful interfaces and resilient systems.",
  location: "California, Earth",
  focus: "Full-stack & systems",
  currently: "Open to opportunities",
  email: "nathan.lachmaiya@gmail.com",
  socials: {
    github: "https://github.com/SilentSlayer425",
    linkedin: "https://linkedin.com/in/nathan-lachmaiya-89188336a/",
  },
  resumeUrl: "/resume-placeholder.pdf",
};

export const skills = {
  Languages: ["TypeScript", "Python", "SQL", "Java", "C", "HTML/CSS", "JavaScript", "Bash", "C++",],
  Frameworks: ["React", "Next.js", "Node.js", "Flask", "Tailwind"],
  Tools: ["Git", "Docker", "PuTTY", "AWS", "Figma", "Vite", "Gen AI APIs",],
  Infrasturcture: ["Linux", "Bash",],
  ML: ["Local LLMS", "Prompt Engineering", "Integrating AI models into Apps", "Automation of AI-driven workflows"]
};

export const experience = [
  {
    kind: "work" as const,
    role: "Executive Web Designer",
    org: "OshiBar",
    period: "August 2023 - Present",
    blurb: "Designed, deployed, and maintained website on Shopify",
  },
  {
    kind: "education" as const,
    role: "High School",
    org: "Mt Eden High School",
    period: "2022 — 2026",
    blurb: "Where the late-night coding habit started.",
  },
];

export const projects = [
  {
    title: "Outfit Canvas",
    summary:
      "Organize your wardrobe digitally, create outfits visually, and access your closet from anywhere. All your clothes, perfectly organized, always with you.",
    tags: ["Digital-Closet", "Google-Oauth", "React", "Vite", "Typescript", "Tailwindcss", "Google-drive"],
    live: "https://outfitcanvas.com",
    repo: "https://github.com/SilentSlayer425/outfit-canvas",
    label: "01",
    iamge: "/projects/OutfitCanvasIcon.png",
  },
  {
    title: "Palladium",
    summary:
      "An open source note taking app based off Notion and Obsidian with features like code-blocks, audio recordings, embeds, p2p file hosting",
    tags: ["No current live status"],
    label: "02",
    image: "/projects/Palladium.png",
  },
];

export const highlights = [

];
