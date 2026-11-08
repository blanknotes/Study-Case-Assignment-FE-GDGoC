import { Link } from "react-router-dom"
import { ArrowIcon } from "../icons/arrowIcon"

export default function Guidance({id}) {
    return (
        <div id={id} 
        className="flex items-center gap-16 self-stretch bg-[#FFF7DF] px-24 py-14">
            
            {/*Starting point title */}
            <div className="flex w-115 flex-col items-start gap-4">
                <div className="flex items-center gap-2.5">
                    <img src="/marker.svg" alt="" className="h-[7px] w-[7px]" />
                    <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                        Start where you are
                    </span>
                </div>

                <h3 className="self-stretch text-4xl font-bold leading-[112%] text-[#242424]">
                    New to tech?
                    That’s a starting point, too.
                </h3>
            </div>

            {/*Starting point copy */}
            <div className="flex flex-[1_0_0] flex-col items-start gap-5">
                <p className="self-stretch text-lg font-normal leading-[155%] text-paragraph">
                    You don’t need a finished portfolio or the perfect track choice. Pick a topic you’re curious about. If you’re unsure, tell us what interests you and we can start a conversation.
                </p>

                <Link
                    to="/pages/*"
                    className="flex items-center text-[16px] font-medium text-textSecondary gap-3"
                >
                    Ask about getting started
                    <ArrowIcon color="#1967D2" />
                </Link>
            </div>
        </div>
    )
}