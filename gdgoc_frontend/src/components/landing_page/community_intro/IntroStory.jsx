export default function IntroStory() {
    return (
        <div className="flex flex-[1_0_0] flex-col items-start gap-6">
            <p className="self-stretch text-[21px] font-normal leading-[155%] text-paragraph">
                Google Developer Groups on Campus, Universitas Gadjah Mada brings students together around one simple idea: we can go {" "}
                <span className="font-bold">further</span>
                {" "}when we{" "}
                <span className="font-bold">learn</span>
                {" "}with each other
            </p>

            <p className="self-stretch text-lg font-normal leading-[155%] text-paragraph">
                From your first line of code to your next product idea, there’s room to ask questions, share what you know, and try something new.
            </p>

            {/*Attribute */}
            <div className="flex items-start gap-3">
                <span className="flex items-start rounded-full bg-backgroundSecondary px-3.5 py-2
                text-[13px] font-bold leading-normal text-paragraph">
                    Student-led
                </span>

                <span className="flex items-start rounded-full bg-backgroundSecondary px-3.5 py-2
                text-[13px] font-bold leading-normal text-paragraph">
                    Peer-powered
                </span>

                <span className="flex items-start rounded-full bg-backgroundSecondary px-3.5 py-2
                text-[13px] font-bold leading-normal text-paragraph">
                    Curiosity-first
                </span>
            </div>
        </div>
    )
}