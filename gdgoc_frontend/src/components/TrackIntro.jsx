import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons/arrowIcon";


export default function SectionIntro({
  label,
  title,
  text,
  linkLabel,
  linkTo
}) {
  return (
    <div className="flex justify-between items-end self-stretch">
      <div className="flex w-200 flex-col items-start gap-4.5">
        <div className="flex items-center gap-2.5">
          <img src="/marker.svg" alt="" className="h-[7px] w-[7px]" />
          <p className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
            {label}
          </p>
        </div>

        <h2 className="self-stretch text-[48px] font-bold leading-[112%] text-[#242424]">
          {title}
        </h2>

        <p className="self-stretch text-[18px] font-normal leading-[155%] text-paragraph">
          {text}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {linkTo && (
          <Link
            to={linkTo}
            className="flex items-center text-[16px] font-medium text-textSecondary gap-3"
          >
            {linkLabel}
            <ArrowIcon color="#1967D2" />
          </Link>
        )}
      </div>
    </div>
  );
}
