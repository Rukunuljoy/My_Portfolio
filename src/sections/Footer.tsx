import React from 'react'
import ArrowRightIcon from '@/assets/icons/arrow-up-right.svg'

const footerLinks= [
  {
    title:'Youtube',
    href:'#'
  },
  {
    title:'Twitter',
    href:'#'
  },
  {
    title:'Instagram',
    href:'#'
  },
  {
    title:'Linkedin',
    href:'#'
  },
   
]

export default function Footer() {
  return (
    <footer className='relative -z-10 overflow-x-clip'>
      <div className="absolute h-[400px] w-[1200px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

        <div className='container'>
          <div className='border-t border-white/15 py-6 text-sm flex flex-col items-center md:flex-row md:justify-between gap-8'>
            <div className='text-white/40'>&copy; 2024. All rights reserved!</div>
            <nav className='flex flex-col items-center md:flex-row gap-8'>
            {
              footerLinks.map((link, i)=> (
                <a href="" key={i} className='inline-flex items-center gap-1.5'>
                  <span className='font-semibold'>{link.title}</span>
                  <ArrowRightIcon className='size-4'/>
                </a>
              ))
            }
            </nav>
          </div>
        </div>
    </footer>
  )
}
