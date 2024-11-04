import React from "react";
import StarIcon from "@/assets/icons/star.svg";

const words = [
  "performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export default function Tape() {
  return (
    <div className="py-16 md:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent, black_10%, black_90%,transparent)]">
      <div className="flex flex-none gap-4 py-3">
        {words.map((word, i) => (
          <div key={i} className="inline-flex gap-4 items-center">
            <span className="text-gray-900 uppercase font-semibold text-sm">{word}</span>
            <StarIcon className="size-6 text-gray-900 -rotate-12"/>
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
}
