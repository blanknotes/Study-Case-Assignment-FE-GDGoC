import ProjectEG from "./ProjectEG";
import ProjectCopy from "./ProjectCopy";

export default function ProjectPossibility() {
    return (
        <div className="flex items-center gap-16 self-stretch px-24 py-22">
            <ProjectEG />

            <ProjectCopy />
        </div>
    )
}