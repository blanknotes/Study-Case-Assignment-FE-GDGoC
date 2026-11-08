import { Link } from "react-router-dom";
import { ArrowIcon } from "../../icons/arrowIcon";

export default function IntroHeader() {
    return(
        <div className="flex w-122.5 flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
                <img src="/marker.svg" alt="" className="h-[7px] w-[7px]" />
                <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    A CAMPUS. A COMMUNITY
                </span>
            </div>

            <h2 className="text-[48px] font-bold leading-[112%] text-[#242424]">
                Not just learning tech.
                Finding your people.
            </h2>

            <Link
                to="/about"
                className="flex items-center text-[16px] font-medium text-textSecondary gap-3"
            >
                More about GDGoC UGM
                <ArrowIcon color="#1967D2" />
            </Link>
        </div>
    )
}