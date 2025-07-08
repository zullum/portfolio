"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "mongodb",
  "python",
  "framer",
  "ai",
  "tailwindcss",
  "numpy",
];

function Skills() {
  const imageMap: { [key: string]: string } = {
    typescript: "/ts.svg",
    javascript: "/js.svg", 
    java: "/java.svg",
    react: "/re.svg",
    html5: "/xhtml.svg",
    css3: "/css3.svg",
    nodedotjs: "/nodejs.svg",
    express: "/express.svg",
    nextdotjs: "/next.svg",
    prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    vercel: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
    jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    docker: "/dock.svg",
    git: "/git.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    visualstudiocode: "/vscode.svg",
    mongodb: "/mongo.svg",
    python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    framer: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
    ai: "/openai.svg",
    tailwindcss: "/tail.svg",
    numpy: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  };

  const images = slugs.map((slug) => imageMap[slug] || `https://cdn.simpleicons.org/${slug}`);
  return (
    <div className="my-10 py-10 ">
      <h1 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h1>
      <div className="flex justify-center align-middle">
        <IconCloud images={images} />
      </div>
    </div>
  );
}

export default Skills;
