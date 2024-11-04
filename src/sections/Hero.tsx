"use client";
import Image from "next/image";
import React from "react";
import rukunul from "@/assets/imgpsh_fullsize_anim.jpeg";
import { BsArrowDown } from "react-icons/bs";
import BackgroundImg from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export default function Hero() {
  return (
    <div className="py-32 md:py-48 relative z-0 overflow-x-clip">
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, black, black_70%, transparent_100%)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${BackgroundImg.src})` }}
        ></div>

        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72}>
          <StarIcon className="size-24 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon className="size-12 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-300 " />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <SparkleIcon className="size-5 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <SparkleIcon className="size-5 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={148}>
          <SparkleIcon className="size-14 text-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={86}>
          <div className="size-3 rounded-full bg-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-emerald-300/20 " />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-emerald-300/20 " />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={rukunul}
            className="w-48 h-48 rounded-full object-cover border-2 border-blue-900"
            alt="Rukunul Joy"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-2">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-semibold">
              Available for new project
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide">
            Full Stack Web developer
          </h1>
          <p className="mt-4 text-center text-white/60">
            I am a Front-End Developer with a passion for modern technologies. I
            am basically a front-end developer using ReactJS and NextJs. At the
            moment front-end development is my primary specialty.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 rounded-xl px-6 h-12">
            <span className="font-semibold">Explore my Work</span>
            <BsArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white rounded-xl bg-white text-gray-900 h-12 px-6">
            <span>👋</span>
            <span className="font-semibold">Lets connect</span>
          </button>
        </div>
      </div>
    </div>
  );
}
