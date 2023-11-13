import React, { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className=" bg-primary h-screen w-screen flex items-center justify-center snap-center">
        <h1 className="text-secondary border-black w-5/6 text-4xl flex flex-wrap text-center animate-fade-right animate-once animate-ease-in-out ">
          My journey into web development began in 2021, where I took my first
          steps with Pluralsight and FreeCodeCamp. I&apos;m a enthusiast
          who&apos;s passionate about coding and eager to share my evolving
          skills and projects. Join me on this exciting web development
          adventure!
        </h1>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
