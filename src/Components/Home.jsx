// Home.jsx
import React, { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className=" bg-primary h-screen w-screen flex items-center justify-center snap-center">
        <div className="animate-fade-right animate-once animate-ease-in-out text-secondary text-9xl text-center  border-black w-5/6 ">
          <h1>
            Hi, I&apos;m Alin!
            <br />A Web Developer.
          </h1>
        </div>
      </div>
    </div>
  );
});

Home.displayName = "Home";

export default Home;
