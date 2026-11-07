
import { Link } from "react-router-dom";
import { ArrowIcon } from "./icons/arrowIcon";

const trackIllustration = {
  "research-discovery": "/hustler.svg",
  "design-creativity": "/hipster.svg",
  "development": "/hacker.svg",
}

export default function TrackCard({ track }) {
  const illustration = 
    trackIllustration[track.id] ?? "/rectangle.svg";
  return (
    <div className="flex flex-1 flex-col items-start self-stretch rounded-3xl border border-[#DADCE0] overflow-hidden">

      {/* Ilustrasi */}
      <div
        className="flex justify-center items-center self-stretch py-0 pr-[72.84px] pl-17.5" style={{backgroundColor : track.color}}
      >
            <div className="box-border flex h-[257.16px] w-[257.16px] items-center justify-center p-[3px_2.16px_2.16px_3px]"
            >
                <img
                src={illustration}
                alt={`${track.name} illustration`}
                className="h-63 w-63 shrink-0 aspect-square object-contain transform-[scale(1.7)]"
                />
            </div>
      </div>

      {/* Track details */}
      <div className="flex flex-col items-start gap-4.5 self-stretch p-7">

        {/* Label */}
        <span
          className="text-[11px] font-medium uppercase text-textSecondary"
        >
          EXPLORE THE WHY
        </span>

        {/* Heading track */}
        <h3 className="self-stretch text-[28px] font-bold leading-[112%] text-[#242424]"
        >
          {track.name}
        </h3>

        {/* Description */}
        <p className="self-stretch text-[16px] font-normal leading-[155%] text-paragraph text-justify"
        >
          {track.description}
        </p>

        {/* Divider */}
        <div className="h-px self-stretch bg-[#DADCE0]" />

        {/* Topics */}
        {track.skills && track.skills.length > 0 && (
          <div className=" self-stretch text-[13px] font-normal leading-[150%] text-paragraph">
            {track.skills.slice(0, 3).map((skill, index, skills) => (
              <span key={skill}>
                {skill}
                {index !== skills.length - 1 ? " · " : ""}
              </span>
            ))}
          </div>
        )}

        {/* Link */}
        <div className="flex items-center gap-3">
            <Link
            to={track.explore_link}
            className="flex items-center text-[16px] font-medium text-textSecondary gap-3"
            >
            Explore this track

            <ArrowIcon color="#1967D2" />
            </Link>
        </div>
      </div>
    </div>
  );
}
