import Image from "next/image";
import vercel from '../public/vercel.svg'

export default function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-20 "
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl">
            <Image
              src={vercel}
              alt="Subarna Adhikari"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Subarna Adhikari
          </h1>
          <p className="mt-4 text-xl text-foreground">
            Full-Stack Developer
          </p>
          <p className="mt-6 max-w-xl text-foreground leading-relaxed">
            I build modern, high-performance web applications with clean UI,
            smooth animations, and scalable backend architecture. Passionate
            about crafting experiences that feel fast, intuitive, and elegant.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-foreground px-6 py-3 text-background font-medium transition shadow-md shadow-foreground"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-foreground px-6 py-3 text-foreground font-medium shadow-md shadow-foreground"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
