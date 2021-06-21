import React, { useState, useEffect } from "react";
import sanityClient from "../client";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          },
          description,
          projectType,
          link,
          tags
    }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12 cursive">
          Welcome to my Projects page
        </h2>
        <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-4">
                  <span className="block h-80 relative rounded py-2 px-1 my-10">
                    <img
                      src={project.mainImage.asset.url}
                      alt={project.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                  </span>

                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    alt={project.title}
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    <span role="img" aria-label="right pointer">
                      👉{" "}
                    </span>
                    View the Project
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
