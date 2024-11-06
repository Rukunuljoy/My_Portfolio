import React from 'react'
import StarIcon from "@/assets/icons/star.svg";

export default function CardHeader({title,desc}:{title:string; desc:string; className?:string}) {
  return (
    <div className="flex flex-col p-6 md:py-8 md:px-8">
    <div className="inline-flex items-center gap-2">
      <StarIcon className="size-9 text-emerald-300" />
      <h3 className="font-serif text-3xl ">{title}</h3>
    </div>
    <p className="text-sm md:text-base max-w-xs text-white/60 mt-2">{desc}</p>
  </div>
  )
}
