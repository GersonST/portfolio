import React from "react";
import image from "../assets/background2.jpg";
import Project from "../components/Project";
import About from "../components/About";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Porto"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-red-600 foint-bold cursive leading-none  lg:leading-snug home-name ">
          Hello World! I'm Gerson
        </h1>
      </section>
      <Project />
      <About />
    </main>
  );
}
