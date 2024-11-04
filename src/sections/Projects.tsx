"use client";
import React from "react";
import CheckIcon from "@/assets/icons/check-circle.svg";
import { BsArrowUpRight } from "react-icons/bs";
import grainImage from "@/assets/images/grain.jpg";

const projectDetails = [
  {
    private_project: "Myself",
    year: 2024,
    Name: "Food delivery system",
    image: "https://i.ibb.co/Cnctk9s/Screenshot-5.png",
    result: [
      {
        title: "The gradient direction is to bottom.",
      },
      { title: "The gradient direction is to bottom." },
      { title: "The gradient direction is to bottom." },
    ],
    liveCode: "https://food-ordering-client-two.vercel.app/",
    githubFrontend: "https://github.com/",
  },
  {
    private_project: "Myself",
    year: 2024,
    Name: "Food delivery system",
    image: "https://i.ibb.co/Cnctk9s/Screenshot-5.png",
    result: [
      {
        title: "The gradient direction is to bottom.",
      },
      { title: "The gradient direction is to bottom." },
      { title: "The gradient direction is to bottom." },
    ],
    liveCode: "https://food-ordering-client-two.vercel.app/",
    githubFrontend: "https://github.com/",
  },
  {
    private_project: "Myself",
    year: 2024,
    Name: "Food delivery system",
    image: "https://i.ibb.co/Cnctk9s/Screenshot-5.png",
    result: [
      {
        title: "The gradient direction is to bottom.",
      },
      { title: "The gradient direction is to bottom." },
      { title: "The gradient direction is to bottom." },
    ],
    liveCode: "https://food-ordering-client-two.vercel.app/",
    githubFrontend: "https://github.com/",
  }
];

export default function Projects() {
  return (
    <section className="pb-16 md:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-World Results
          </p>
        </div>
        <h2 className="font-serif text-center text-3xl  md:text-5xl mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
          quos.Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Provident, quos.
        </p>
        <div className="flex flex-col md:mt-20 mt-10 gap-12">
          {projectDetails.map((project, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-3xl relative  overflow-hidden z-0 after:z-10 after:content-['']  after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl md:pt-16 md:px-20 after:outline-white/20 px-8 pt-8 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="md:grid md:grid-cols-2 md:gap-16">
                <div className="">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text ">
                    <span>{project.private_project}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-serif mt-2 md:mt-5">
                    {project.Name}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.result.map((result, i) => (
                      <li key={i} className="flex  gap-2 text-sm text-white/50">
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="project-links flex flex-col gap-4 my-8 justify-between md:flex-row">
                    <a
                      href={project.liveCode}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer px-6">
                        <span>Visit Live Project</span>
                        <BsArrowUpRight className="size-4" />
                      </button>
                    </a>
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto rounded-xl font-semibold inline-flex items-center justify-center gap-2 cursor-pointer px-6">
                        <span>Frontend Code</span>
                        <BsArrowUpRight className="size-4" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.Name}
                    className="project-image rounded-lg -mb-4 md:-mb-0 md:mt-0 md:absolute md:h-full md:w-auto md:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
