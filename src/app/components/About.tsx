import React from "react";
import Image from "next/image";
import Heading from "./Heading";

const About = () => {
  return (
<div id="about" className="container py-20">
  <Heading title="About Me" />
  <div className="grid lg:grid-cols-2 gap-10">
    <div className="flex justify-center lg:justify-start">
      <img
        src="/profile.jpg"
        alt="Profile Picture"
        className="rounded-full w-60 h-60 object-cover"
      />
    </div>
    <div className="text-lg text-textSecondary">
      <p>
        I'm a passionate web developer with expertise in building modern,
        responsive websites using JavaScript, React, and Next.js. With a keen eye
        for design and performance, I aim to create seamless experiences.
      </p>
      <p className="mt-6">
        Outside of coding, I enjoy learning new technologies, solving puzzles, and
        contributing to open-source projects.
      </p>
    </div>
  </div>
</div>

  );
};

export default About;
