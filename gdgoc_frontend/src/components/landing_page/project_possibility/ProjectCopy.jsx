import { Link } from "react-router-dom";
import { ArrowIcon } from "../../icons/arrowIcon";

export default function ProjectCopy() {
    return (
        <div className="flex flex-[1_0_0] flex-col items-start gap-6">
            <div className="flex items-center gap-2.5">
                <img src="/marker.svg" alt="" className="h-[7px] w-[7px]" />
                <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    BUILD SOMETHING THAT MATTERS
                </span>
            </div>

            <h2 className="text-[48px] font-bold leading-[112%] text-[#242424]">
                Your next project could start on campus.
            </h2>

            <p className="self-stretch text-[18px] font-normal leading-[155%] text-paragraph">
                What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
            </p>

            <p className="self-stretch text-[18px] font-normal leading-[155%] text-paragraph">
                Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
            </p>

            <Link
                to="/pages/about"
                className="flex items-center text-[16px] font-medium text-textSecondary gap-3"
            >
                Explore project-based learning
                <ArrowIcon color="#1967D2" />
            </Link>
        </div>
    )
}