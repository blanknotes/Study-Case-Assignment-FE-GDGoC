export default function () {
    return (
        <div className="flex items-start gap-2 self-stretch">
            {/*Journey Step */}
            <div className="flex flex-[1_0_0] flex-col items-start gap-5">
                <h3 className="text-[44px] font-bold leading-normal text-textSecondary">
                    01
                </h3>

                <hr className="self-stretch h-px w-full border-0 bg-[#DADCE0]" />

                <h4 className="self-stretch text-[25px] font-bold leading-[112%] text-[#242424]">
                    Follow your curiosity
                </h4>

                <p className="text-base font-normal leading-[155%] text-paragraph">
                    Explore the tracks and find a topic you want to understand better.
                </p>
            </div>

            <div className="flex flex-[1_0_0] flex-col items-start gap-5">
                <h3 className="text-[44px] font-bold leading-normal text-textSecondary">
                    02
                </h3>

                <hr className="self-stretch h-px w-full border-0 bg-[#DADCE0]" />

                <h4 className="self-stretch text-[25px] font-bold leading-[112%] text-[#242424]">
                    Learn alongside others
                </h4>

                <p className="text-base font-normal leading-[155%] text-paragraph">
                    Join a learning opportunity, ask a question, and share your perspective.
                </p>
            </div>

            <div className="flex flex-[1_0_0] flex-col items-start gap-5">
                <h3 className="text-[44px] font-bold leading-normal text-textSecondary">
                    03
                </h3>

                <hr className="self-stretch h-px w-full border-0 bg-[#DADCE0]" />

                <h4 className="self-stretch text-[25px] font-bold leading-[112%] text-[#242424]">
                    Turn learning into action
                </h4>

                <p className="text-base font-normal leading-[155%] text-paragraph">
                    Practice through a project, exchange feedback, and pass something on.
                </p>
            </div>
        </div>
    )
}