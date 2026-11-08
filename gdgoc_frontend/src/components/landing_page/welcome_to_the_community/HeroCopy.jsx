import { Link } from "react-router-dom"

import { ArrowIcon } from "../../icons/arrowIcon"
import { CommunityDot } from "../../icons/communityDot"

export default function HeroCopy() {
    return (
        <div className="flex w-155 flex-col items-start gap-7">

            {/*Section Label */}
            <div className="flex items-center gap-2.5">
                <img src="/marker.svg" alt="" className="h-[7px] w-[7px]" />
                <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    GDGoC UGM • 2026/2027
                </span>
            </div>

            <h2 className="text-[80px] font-bold leading-[105%]">
                <span className="block text-[#242424]">
                    Big ideas.
                </span>

                <span className="block text-textSecondary">
                    Built together.
                </span>
            </h2>

            <p className="text-[21px] font-normal leading-[155%] text-paragraph">
                A place for curious minds at{" "}
                <span className="font-bold">
                    Universitas Gadjah Mada
                </span>
                {" "}to learn, connect, and build technology that matters.
            </p>

            {/*Hero action */}
            <div className="flex items-start gap-3">
                <Link
                to="/Overview"
                className="flex h-13 items-center gap-4 whitespace-nowrap rounded-lg border border-transparent bg-boxes px-6 text-base font-medium text-white transition-all duration-200 ease-in-out hover:border-textSecondary hover:bg-[#025efc] active:scale-[0.95] active:bg-[#2b75f3]">
                    Find your learning track
                    <ArrowIcon />
                </Link>

                <Link
                to="/Overview"
                className="flex h-13 items-center gap-4 whitespace-nowrap rounded-lg border border-[#DADCE0] bg-white px-6 text-base font-medium text-textSecondary transition-all duration-200 ease-in-out hover:border-[#d5d6d6] hover:bg-[#d5d6d6] active:scale-[0.95] active:bg-[#d5d6d6]">
                    Get to know us
                    <ArrowIcon color="#1967D2" />
                </Link>
            </div>

            {/*Welcome Note */}
            <div className="flex items-center gap-2.5">
                <div className="flex items-start -space-x-0.75">
                    <CommunityDot color="#EA4335" />
                    <CommunityDot color="#F9AB00" />
                    <CommunityDot />
                    <CommunityDot color="#4284F4" />
                </div>

                <span className="text-[14px] font-normal leading-normal text-paragraph">
                    Different backgrounds. A shared curiosity.
                </span>
            </div>

        </div>
    )
}