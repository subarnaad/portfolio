export type ExperienceType = "intern" | "freelance" | "project";

export interface Experience {
    year: string;
    title: string;
    company: string;
    description: string;
    type: ExperienceType;
    link?: string;
}

export const experiences: Experience[] = [
    {
        year: "2024 – 2025",
        title: "Backend Intern",
        company: "Iions Technology Pvt. Ltd.",
        description:
            "Built real-time chat, WebRTC video/audio calls, role-based systems, and REST APIs using Node.js, Socket.IO, and PostgreSQL.",
        type: "intern",
        link: "https://iions.tech",
    },
    {
        year: "2023 – 2024",
        title: "Software Fellowship",
        company: "Cloco Nepal",
        description:
            "Hands-on training in Linux, Django, DRF, React, and Next.js. Built full-stack projects following industry best practices.",
        type: "intern",
    },
    {
        year: "2025 – Present",
        title: "Freelance Developer",
        company: "Adhyatmik Samaj Nepal",
        description:
            "Designed CMS, admin panel, and APIs. Worked closely with stakeholders to deliver scalable and secure solutions.",
        type: "freelance",
    },
];
