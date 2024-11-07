import React, { ComponentPropsWithRef } from "react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";

export default function Card({ className, children, ...other }:ComponentPropsWithRef<"div">) {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative  overflow-hidden z-0 after:z-10 after:content-['']  after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:pointer-events-none after:outline-white/20",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-0"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
}
