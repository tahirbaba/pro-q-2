import React from "react";
import Heading from "./Heading";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "React",
];

const Skills = () => {
  return (
<div id="skills" className="container py-20">
  <Heading title="Skills" />
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex flex-col items-center">
      <span className="text-4xl">⚡</span>
      <h3 className="mt-2 font-semibold">JavaScript</h3>
      <p className="text-textSecondary">Intermediate</p>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-4xl">🚀</span>
      <h3 className="mt-2 font-semibold">React</h3>
      <p className="text-textSecondary">Advanced</p>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-4xl">🛠️</span>
      <h3 className="mt-2 font-semibold">Next.js</h3>
      <p className="text-textSecondary">Intermediate</p>
    </div>
  </div>
</div>

  );
};

export default Skills;
