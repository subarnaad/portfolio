export type ExperienceType = "intern" | "freelance" | "college-project";

export interface Experience {
    year: string;
    title: string;
    organization: string;
    role: string;
    description: string;
    type: ExperienceType;
    tech?: string[];
    link?: string;
}
export const experiences: Experience[] = [
    {
        year: "2025 – Present",
        title: "Freelance Developer",
        organization: "Adhyatmik Samaj Nepal",
        role: "Full-Stack Developer",
        description:
            "Designed and developed CMS, admin panels, and REST APIs. Collaborated with stakeholders to deliver secure, scalable, and user-friendly systems.",
        type: "freelance",
        tech: ["Next.js", "", "PostgreSQL", "REST API"],
    },
    {
        year: "2023 – 2024",
        title: "Software Fellowship",
        organization: "Cloco Nepal Inc.",
        role: "Software Engineering Fellow",
        description:
            "Hands-on training in Linux, Django, DRF, React, and Next.js. Built full-stack projects following industry best practices.",
        type: "intern",
        tech: ["Linux", "Django", "DRF", "React", "Next.js", "python", "postgresSQL",],
    },
    {
        year: "2024 – 2025",
        title: "Backend Intern",
        organization: "Iions Technology Pvt. Ltd.",
        role: "Backend Developer",
        description:
            "Built real-time chat, WebRTC video/audio calls, role-based systems, and REST APIs using Node.js, Socket.IO, and PostgreSQL.",
        type: "intern",
        tech: ["Node.js", "Socket.IO", "PostgreSQL", "WebRTC", "express", "webRTC"],
        link: "https://iions.tech",
    },
    {
        year: "4th Semester",
        title: "Parking Management System",
        organization: "College Project",
        role: "Full-Stack Developer",
        description:
            "A web-based parking booking platform for vehicles in Nepal with real-time availability and Khalti payment integration.",
        type: "college-project",
        tech: ["Node.js", "React", "Bootstrap", "CSS", "Khalti"],
    },

    {
        year: "6th Semester",
        title: "Real Estate Management System",
        organization: "College Project",
        role: "Backend Developer",
        description:
            "Backend system for listing, renting, and selling properties with real-time chat and map-based property visualization.",
        type: "college-project",
        tech: ["Node.js", "Socket.IO", "Swagger", "OpenStreetMap"],
    },

    {
        year: "8th Semester",
        title: "QuickConnect (Video Conferencing Platform)",
        organization: "Final Year Project",
        role: "Backend Developer",
        description:
            "A scalable video conferencing platform with real-time audio/video, chat, whiteboard, breakout rooms, recording, and LMS integration.",
        type: "college-project",
        tech: ["Node.js", "WebRTC", "Socket.IO", "Swagger", "LMS"],
    },
];
