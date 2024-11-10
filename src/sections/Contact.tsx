import React from 'react'
import ArrowIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from "@/assets/images/grain.jpg"

export default function Contact() {
  return (
    <div id="contact" className="py-16 pt-12 md:py-24 md:pt-20">
      <div className='container'>
        <div className='bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-950 py-5 px-10 rounded-3xl text-center overflow-hidden md:text-left relative z-0'>
          <div className='absolute inset-0 opacity-5 -z-10' style={{
            backgroundImage: `url(${grainImage.src})`
          }}></div>
          <div className='flex flex-col md:flex-row gap-8 justify-center items-center md:py-4'>
            <div>
        <h2 className='font-serif md:text-3xl text-2xl'>Lets create something amazing together!</h2>
        <p className='text-sm md:text-base mt-2'>
        We would love to hear from you! Whether you have questions, feedback, or inquiries, feel free to reach out. Our team is ready to assist you and provide the support you need.
        </p>
        </div>
        <div>
        <button className='text-white  bg-gray-900 inline-flex items-center px-6 h-12 rounded-full gap-2 w-max border border-gray-900'>
          <span className='font-semibold'>Contact me</span>
          <ArrowIcon className='size-4'/>
        </button>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}
