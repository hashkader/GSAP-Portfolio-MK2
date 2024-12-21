import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';

function Name() {
  const firstName = "HASHIM".split("");
  const lastName = "KADER".split("");
  const degree = "Software & AI/ML Engineer.".split("")

  useEffect(() => {
    gsap.to('.letter', {
      scale: 1,
      stagger: 0.07,
      opacity: 1,
      duration: 0.1,
      ease:"power2.out"
    });
  }, []);

  const renderLetters = (letters) =>
    letters.map((letter, index) => (
      <div
        key={index}
        className="letter text-7xl sm:text-8xl md:text-9xl text-grey opacity-0 font-larken font-bold relative scale-150"
      >
        {letter}
      </div>
    ));

    const renderDegree = (letters) =>
      letters.map((letter, index) => (
        <div
          key={index}
          className={`letter text-2xl sm:text-4xl  md:text-6xl text-grey opacity-0 font-larken relative scale-150 italic ${
            letter === " " ? "w-4" : ""
          }`}
        >
          {letter === " " ? "\u00A0" : letter} 
        </div>
      ));

  return (
      <div className='flex flex-col h-full md:justify-center my-24 md:my-0 sm:mx-8'>
        <div className="name flex items-center justify-center md:justify-normal">{renderLetters(firstName)}</div>
        <div className="surname flex items-center justify-center md:justify-normal">{renderLetters(lastName)}</div>
        <div className="degree flex items-center justify-center md:justify-normal">{renderDegree(degree)}</div>
      </div>
  );
}

export default Name; 