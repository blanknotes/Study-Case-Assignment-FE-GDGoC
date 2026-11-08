import { CommunityDot } from "../../icons/communityDot"

export default function ProjectCampus() {
    return (
        <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-[#DADCE0] bg-white p-6.5">

            {/*Browser Chrome */}
            <div className="flex items-start gap-1.5">
                <CommunityDot color="#EA4335" />
                <CommunityDot color="#F9AB00" />
                <CommunityDot />
            </div>

            <h3 className="self-stretch text-[32px] font-bold leading-[112%] text-[#242424]">
                A little less friction.
                A better campus day.
            </h3>

            {/*Solution Tiles */}
            <div className="flex items-start gap-3 self-stretch">
                <span className="flex flex-[1_0_0] flex-col items-start gap-6 rounded-xl bg-[#EAF2FF] p-4 text-[13px] font-bold leading-normal text-black">
                    Discover
                </span>

                <span className="flex flex-[1_0_0] flex-col items-start gap-6 rounded-xl bg-[#EAF5ED] p-4 text-[13px] font-bold leading-normal text-black">
                    Connect
                </span>

                <span className="flex flex-[1_0_0] flex-col items-start gap-6 rounded-xl bg-[#FDEDEA] p-4 text-[13px] font-bold leading-normal text-black">
                    Share
                </span>
            </div>

            <p className="text-[13px] font-normal leading-[155%] text-paragraph">
                Start with a student need. Build a small, useful solution.
            </p>
        </div>
    )
}