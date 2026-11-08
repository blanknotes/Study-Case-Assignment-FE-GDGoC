
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../icons/arrowIcon";

const formatIllustration = {
  "study-groups": "/format_book.svg",
  "project-circles": "/format_people.svg",
  "hands-on-workshops": "/format_rect.svg",
}

const formatDetail = {
  "study-groups": "Study groups & guided practice",
  "project-circles": "Workshops & technical sessions",
  "hands-on-workshops": "Project circles & sharing sessions",
}

export default function LFCard({ format }) {
  const illustration = 
    formatIllustration[format.id] ?? "/rectangle.svg";
  const detail =
    formatDetail[format.id] ?? "";
  return (
    //Program card
    <div className="flex self-stretch flex-[1_0_0] flex-col items-start gap-5 rounded-3xl bg-white p-8">
        {/*Program icon*/}
        <img 
        src={illustration} 
        alt={`${format.name} illustration`} 
        className="h-6 w-6 shrink-0"
        />

        {/*Program description */}
        <h3 className="self-stretch text-[28px] font-bold leading-[112%] text-[#242424]">
            {format.name}
        </h3>

        <p className="self-stretch text-base font-normal leading-[155%] text-paragraph">
            {format.description}
        </p>

        <hr className="h-px w-full border-0 bg-[#DADCE0]" />

        <span className="text-[13px] font-medium leading-normal text-textSecondary">
            {detail}
        </span>
    </div>
  );
}
