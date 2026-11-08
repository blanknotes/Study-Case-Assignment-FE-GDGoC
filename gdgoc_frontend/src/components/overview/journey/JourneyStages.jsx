export default function JourneyStages({ stage }) {
    return (
        //Learning Stages
        <div className="flex items-start gap-8 self-stretch">
            {/*Learning stage */}
            <div className="flex flex-[1_0_0] flex-col items-start gap-5">
                <h3 className="text-[38px] font-bold leading-normal text-textSecondary">
                    0{stage.step}
                </h3>

                <hr className="self-stretch h-px w-full border-0 bg-[#DADCE0]" />

                <h4 className="self-stretch text-[26px] font-bold leading-[112%] text-[#242424]">
                    {stage.title}
                </h4>

                <p className="text-base font-normal leading-[155%] text-paragraph">
                    {stage.description}
                </p>
            </div>
        </div>
    );
}