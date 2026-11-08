const pathways = [
  {
    pathway: "Research & discovery",
    practice: "Listening, problem framing, and testing assumptions",
    outcome: "A research insight and a focused problem brief",
  },
  {
    pathway: "Design & creativity",
    practice: "Ideation, user flows, and prototype feedback",
    outcome: "An interactive prototype and a design story",
  },
  {
    pathway: "Development",
    practice: "Coding, testing, and connecting tools",
    outcome: "A working demo with a clear explanation",
  },
];

export default function LOTable() {
    return (
        <div className="flex flex-col items-start self-stretch rounded-[20px] border border-[#DADCE0]">
            {/*Comparison Header */}
            <div className="flex items-start gap-7 self-stretch bg-backgroundSecondary px-7 py-5 rounded-t-[20px]">
                <span className="w-62.5 text-xs font-medium leading-normal text-paragraph">
                    Pathway
                </span>

                <span className="w-62.5 text-xs font-medium leading-normal text-paragraph">
                    What you can practice
                </span>

                <span className="w-62.5 text-xs font-medium leading-normal text-paragraph">
                    A possible outcome
                </span>
            </div>

            {/*Track Outcome */}
            {pathways.map((item) => (
            <div key={item.pathway}
            className="flex items-start gap-7 self-stretch p-7 border-t border-[#DADCE0]">
                <h4 className="w-62.5 text-lg font-medium leading-normal text-[#242424]">
                    {item.pathway}
                </h4>

                <p className="flex w-md flex-col items-start self-stretch text-base font-normal leading-[155%] text-paragraph">
                    {item.practice}
                </p>

                <p className="flex flex-[1_0_0] flex-col items-start text-base font-normal leading-[155%] text-paragraph">
                    {item.outcome}
                </p>
            </div>
            ))}
        </div>
    )
}