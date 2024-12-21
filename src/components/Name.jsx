import React from 'react';
import { useEffect } from 'react';
import gsap from 'gsap';

function Name() {
  const firstName = "HASHIM".split("");
  const lastName = "KADER".split("");

  useEffect(() => {
    gsap.to('.letter', {
      scale: 1,
      stagger: 0.1,
      opacity: 1,
      duration: 0.2,
    });
  }, []);

  const renderLetters = (letters) =>
    letters.map((letter, index) => (
      <div
        key={index}
        className="letter text-5xl sm:text-7xl md:text-9xl text-grey opacity-0 font-larken font-bold relative scale-150"
      >
        {letter}
      </div>
    ));

  return (
    <div className="h-full flex justify-center sm:items-center">
      <div className="main-text max-w-full flex flex-wrap gap-10 justify-center sm:h-96">
        <div className="name flex items-center">{renderLetters(firstName)}</div>
        <div className="surname flex items-center">{renderLetters(lastName)}</div>
      </div>
    </div>
  );
}

export default Name; 