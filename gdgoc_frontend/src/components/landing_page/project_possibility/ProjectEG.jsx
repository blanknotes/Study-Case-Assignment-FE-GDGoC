import ProjectCampus from "./ProjectCampus"

export default function ProjectEG() {
    return (
        <div className="flex w-148 flex-col items-start gap-6 rounded-4xl bg-[#FFF7DF] p-10">
            {/*header */}
            <div className="flex items-center justify-between self-stretch">
                <span className="text-xs font-normal leading-normal text-paragraph">
                    IDEA → PROTOTYPE
                </span>

                <span className="text-xs font-normal leading-normal text-paragraph">
                    {"</>"}
                </span>
            </div>
            
            <ProjectCampus />
            
            <p className="text-[11px] font-normal leading-normal text-paragraph">
                EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
            </p>
        </div>
    )
}