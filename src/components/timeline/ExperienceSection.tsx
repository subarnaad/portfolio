"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineItem from "./TimelineItem";
import { experiences, ExperienceType } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

type FilterType = "all" | ExperienceType;

export default function ExperienceSection() {
    const lineRef = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState<FilterType>("all");
    const [showAll, setShowAll] = useState(false);

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

    const filtered =
        filter === "all"
            ? experiences
            : experiences.filter((e) => e.type === filter);

    const visibleItems =
        filter === "all" && !showAll ? filtered.slice(0, 2) : filtered;

    return (
        <section id="experience" className="">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight">
                    Experiences
                </h2>
                <p className="mt-4 max-w-xl text-foreground">
                    A curated timeline of my professional experience and academic projects.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                    {["all", "intern", "freelance", "college-project"].map((t) => (
                        <button
                            key={t}
                            onClick={() => {
                                setFilter(t as FilterType);
                                setShowAll(false);
                            }}
                            className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${filter === t
                                ? "bg-purple-500 text-black shadow-lg shadow-purple-500/30"
                                : "border-b cursor-pointer border-background text-foreground hover:text-foreground hover:border-foreground"
                                }`}
                        >
                            {t.replace("-", " ")}
                        </button>
                    ))}
                </div>
                <div className="relative mt-16">
                    <div
                        ref={lineRef}
                        className="absolute left-1 top-0 h-full w-px bg-linear-to-b from-background via-purple-800 to-transparent"
                    />

                    {visibleItems.map((item, i) => (
                        <TimelineItem key={i} item={item} />
                    ))}
                </div>
                {filter === "all" && filtered.length > 3 && (
                    <div className="mt-12 flex justify-center">
                        <button
                            onClick={() => setShowAll((prev) => !prev)}
                            className="rounded-xl border border-neutral-800 px-8 py-3 text-sm font-medium cursor-pointer text-foreground transition-all duration-300 ease-out shadow-md shadow-purple-700"
                        >
                            {showAll ? "Show less" : "More all experience"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
