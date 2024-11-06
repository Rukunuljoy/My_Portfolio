import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import React from "react";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import html from "@/assets/technologies/html.png";
import css from "@/assets/technologies/css.jpeg";
import TailwindCSS from "@/assets/technologies/tailwind.jpeg";
import JavaScript from "@/assets/technologies/javascript.png";
import ReactJS from "@/assets/technologies/reactjs.png";
import NextJS from "@/assets/technologies/nextjs.png";
import NodeJs from "@/assets/technologies/nodejs.png";
import ExpressJs from "@/assets/technologies/express.png";
import MongoDB from "@/assets/technologies/mongodb.jpeg";
import Vercel from "@/assets/technologies/vercel.png";
import Postman from "@/assets/technologies/postman.png";
import TypeScript from "@/assets/technologies/typescript.png";
import Redux from "@/assets/technologies/redux.png";
import Github from "@/assets/technologies/github.png";
import Firebase from "@/assets/technologies/firebase.png";
import Learning from "@/assets/icons/learning.webp";
import Problem from "@/assets/icons/problem.png";
import coding from "@/assets/icons/coding.png";
import skill from "@/assets/icons/skill.png";
import Productive from "@/assets/icons/productive.png";
import Playing from "@/assets/icons/playing.jpeg";
import Exercise from "@/assets/icons/Exercise.jpeg";
import MapImage from "@/assets/images/map.png";
import Smilemimoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";

const toolboxItems = [
  {
    title: "HTML5",
    icon: html,
  },
  {
    title: "CSS3",
    icon: css,
  },
  {
    title: "TailwindCSS",
    icon: TailwindCSS,
  },
  {
    title: "JavaScript",
    icon: JavaScript,
  },
  {
    title: "ReactJS",
    icon: ReactJS,
  },
  {
    title: "NextJS",
    icon: NextJS,
  },
  {
    title: "NodeJs",
    icon: NodeJs,
  },
  {
    title: "ExpressJs",
    icon: ExpressJs,
  },
  {
    title: "MongoDB",
    icon: MongoDB,
  },
  {
    title: "Vercel",
    icon: Vercel,
  },
  {
    title: "Postman",
    icon: Postman,
  },
  {
    title: "TypeScript",
    icon: TypeScript,
  },
  {
    title: "Redux",
    icon: Redux,
  },
  {
    title: "Github",
    icon: Github,
  },
  {
    title: "Firebase",
    icon: Firebase,
  },
];

const hobbies = [
  {
    title: "Learning",
    emoji: Learning,
    left:'5%',
    top:'2%'
  },
  {
    title: "Problem solving",
    emoji: Problem,
    left:'45%',
    top:'55%'
  },
  {
    title: "coding",
    emoji: coding,
    left:'10%',
    top:'30%'
  },
  {
    title: "skill development",
    emoji: skill,
    left:'25%',
    top:'45%'
  },
  {
    title: "Productive",
    emoji: Productive,
    left:'55%',
    top:'30%',
  },
  {
    title: "Playing",
    emoji: Playing,
    left:'50%',
    top:'2%'
  },
  {
    title: "Exercise",
    emoji: Exercise,
    left:'5%',
    top:'55%'
  },
];

export default function About() {
  return (
    <div className="py-20 md:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          desc="Learn More about who I am, What I do and What Inspire me!"
        />
        <div className="mt-20 flex flex-col gap-8 md:gap-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <Card className="h-[320px] md:col-span-2">
            <CardHeader
              title="My Reds"
              desc="Explore the books shaping my perspectives"
            />
            <div className="w-40 mx-auto mt-4 md:mt-0">
              <Image src={BookImage} alt="Book cover" />
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-3">
            <CardHeader
              title="My Toolbox"
              desc=" Explore the technologies and tools I use to craft exceptional
                digital experience."
            />
            <div
              className="flex"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div className="flex flex-none gap-6">
                {toolboxItems.map((item, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg border-t border-b border-gray-200"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                    <span className="font-semibold text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex mt-6"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <div className="flex flex-none gap-6">
                {toolboxItems.map((item, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg border-t border-b border-gray-200"
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                    <span className="font-semibold text-lg">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
          <Card className="h-[320px] flex flex-col md:col-span-3">
            <CardHeader
              title="Beyond the code"
              desc="Explore my interests and hobbies beyond the digital realm"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby, i) => (
                <div key={i} className="inline-flex gap-2 px-3 bg-gradient-to-r from-emerald-300 to bg-sky-400 rounded-full py-1.5 items-center justify-center absolute" style={{
                  left:hobby.left,
                  top:hobby.top,
                }}>
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <Image
                    src={hobby.emoji}
                    alt={hobby.title}
                    height={25}
                    width={25}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-2">
            <Image src={MapImage} alt="map" className="h-full w-full object-cover"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-300 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <Image src={Smilemimoji} alt="smiling memoji" className="size-20"/>
            </div>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}
