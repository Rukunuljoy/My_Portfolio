"use client"
import React from 'react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className='flex justify-center items-center relative top-6'>
        <nav className='flex gap-4 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }} 
              className='nav-item hover:bg-white/70 hover:text-gray-900'
            >
              Home
            </a>
            <a 
              href="#project" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('project');
              }} 
              className='nav-item hover:bg-white/70 hover:text-gray-900'
            >
              Project
            </a>
            <a 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }} 
              className='nav-item hover:bg-white/70 hover:text-gray-900'
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }} 
              className='nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900'
            >
              Contact
            </a>
        </nav>
    </div>
  );
}
