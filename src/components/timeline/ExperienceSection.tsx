"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineItem from "./TimelineItem";
import { experiences } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
    const lineRef = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState<"all" | "intern" | "freelance" | "project">(
        "all"
    );

    useEffect(() => {
        if (!lineRef.current) return;

        gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                transformOrigin: "top",
                ease: "none",
                scrollTrigger: {
                    trigger: lineRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                },
            }
        );
    }, []);

    const filtered = filter === "all"
        ? experiences
        : experiences.filter((e) => e.type === filter);

    return (
        <section id="experience" className="px-6 lg:px-20 py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-semibold">Experience</h2>
                <div className="mt-6 flex gap-3">
                    {["all", "intern", "freelance", "project"].map((t) => (
                        <button
                            key={t}
                            onClick={() => setFilter(t as never)}
                            className={`rounded-xl px-4 py-2 text-sm transition ${filter === t
                                ? "bg-purple-500 text-black"
                                : "border border-neutral-800 text-neutral-400 hover:text-white"
                                }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
                <div className="relative mt-16">
                    <div
                        ref={lineRef}
                        className="absolute left-1 top-0 h-full w-px bg-neutral-800"
                    />

                    {filtered.map((item, i) => (
                        <TimelineItem key={i} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
