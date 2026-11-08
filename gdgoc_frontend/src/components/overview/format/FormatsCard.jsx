
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../icons/arrowIcon";

const formatIllustration = {
  "study-groups": "/format_book.svg",
  "project-circles": "/format_people.svg",
  "hands-on-workshops": "/format_rect.svg",
  "knowledge-sharing" : "/program_lamp.svg"
}

const formatDetail = {
  "study-groups": "Best for • Learning the fundamentals",
  "project-circles": "Best for • Putting skills into practice",
  "hands-on-workshops": "Best for • Trying something new",
  "knowledge-sharing" : "Best for • Exchanging perspectives"
}

export default function FormatCard({ format }) {
  const illustration = 
    formatIllustration[format.id] ?? "/rectangle.svg";
  
  const detail =
    formatDetail[format.id] ?? "";
  return (
    //Program card
    <div className="flex flex-1 items-start gap-6 rounded-3xl bg-white p-7">
        {/*Program icon*/}
        <div className="flex h-13 w-13 items-center justify-center rounded-[14px]">
            <img 
            src={illustration} 
            alt={`${format.name} illustration`} 
            className="h-6 w-6 shrink-0"
            />
        </div>

        {/*Program description */}
        <div>
            <h3 className="self-stretch text-[27px] font-bold leading-[112%] text-[#242424]">
                {format.name}
            </h3>

            <p className="self-stretch text-base font-normal leading-[155%] text-paragraph">
                {format.description}
            </p>

            <span className="text-[13px] font-medium leading-normal text-textSecondary">
                {detail}
            </span>
        </div>
    </div>
  );
}
