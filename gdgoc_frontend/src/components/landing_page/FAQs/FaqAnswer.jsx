export default function FaqAnswer({ answer }) {
    return (
        //FAQ Item
        <div className="flex flex-col items-start gap-3.5 self-stretch">

            {/*Question */}
            <div className="flex items-center gap-6 self-stretch">
                <h4 className="flex-[1_0_0] text-xl font-medium leading-normal text-[#242424]">
                    {answer.question}
                </h4>
            </div>

            <p className="self-stretch text-base font-normal leading-[155%] text-paragraph">
                {answer.answer}
            </p>

            <hr className="self-stretch h-px w-full border-0 bg-[#DADCE0]" />
        </div>
    )
}