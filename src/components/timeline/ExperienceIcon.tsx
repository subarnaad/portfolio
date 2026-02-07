import { Briefcase, GraduationCap, FolderGit2 } from "lucide-react";

export function ExperienceIcon({ type }: { type: string }) {
    if (type === "intern") return <GraduationCap size={18} />;
    if (type === "freelance") return <Briefcase size={18} />;
    return <FolderGit2 size={18} />;
}
