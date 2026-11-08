import LOTable from "./LOTable";

export default function LearningOutcomes() {
    return (
        <div className="flex flex-col items-start gap-8 self-stretch px-24 pb-20">
            <h2 className="self-stretch text-4xl font-bold leading-[112%] text-[#242424]">
                From an interest to something you can show.
            </h2>

            <LOTable />

            <p className="text-[13px] font-normal leading-[155%] text-paragraph">
                Illustrative learning outcomes. Topics and opportunities are shared through community updates.
            </p>
        </div>
    )
}