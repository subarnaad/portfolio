"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Experience } from "@/data/experience";
import { ExperienceIcon } from "./ExperienceIcon";

export default function TimelineItem({ item }: { item: Experience }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        gsap.fromTo(
            ref.current,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                },
            }
        );
    }, []);

    return (
        <div ref={ref} className="relative pl-10 pb-16">
            <span className="absolute -left-1.75 top-2 h-3 w-3 rounded-full bg-purple-500" />
            <div className="rounded-2xl border border-neutral-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/10">
                <span className="text-sm text-neutral-500">{item.year}</span>

                <div className="mt-2 flex items-center gap-2">
                    <ExperienceIcon type={item.type} />
                    <h3 className="text-xl font-medium">
                        {item.title} — {item.company}
                    </h3>
                </div>

                <p className="mt-3 text-neutral-400">{item.description}</p>

                {item.link && (
                    <a
                        href={item.link}
                        target="_blank"
                        className="mt-4 inline-block text-sm text-purple-400 hover:underline"
                    >
                        View Project →
                    </a>
                )}
            </div>
        </div>
    );
}
