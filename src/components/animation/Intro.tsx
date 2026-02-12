"use client";

import { useRef } from "react";
import gsap from "gsap";

interface IntroProps {
  onFinish: () => void;
}

export default function Intro({ onFinish }: IntroProps) {
  const introRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleClick = (): void => {
    if (!introRef.current || !nameRef.current || !audioRef.current) return;

    audioRef.current.currentTime = 0;
    audioRef.current.play();

    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: onFinish,
    });

    tl.to(nameRef.current, {
      scale: 8,
      opacity: 0,
      duration: 3,
    }).to(
      introRef.current,
      {
        scale: 1.4,
        opacity: 0,
        duration: 3,
      },
      "-=0.8"
    );
  };

  return (
    <section
      ref={introRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <h1
        ref={nameRef}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleClick();
          }
        }}
        className="cursor-pointer select-none text-foreground text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-wide">
        SUBARNA ADHIKARI
      </h1>

      <audio ref={audioRef} src="/sound/IntroSound.mp3" preload="auto" />
    </section>
  );
}
