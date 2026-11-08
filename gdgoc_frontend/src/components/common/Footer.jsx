import { NavLink } from "react-router-dom";
import { ArrowIcon } from "../icons/arrowIcon";

import { Spinner } from "../StatusViews";
import { ErrorMessage } from "../StatusViews";
import { EmptyState } from "../StatusViews";

import useFetch from "../../hooks/useFetch";
import { getNavigation } from "../../../api/api";

export default function Navigation() {
    const {
        data: navigation,
        loading,
        error,
        retry
    } = useFetch(getNavigation);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return (
            <ErrorMessage
             message={error}
             onRetry={retry}
            />
        );
    }

    if (navigation.length === 0) {
        return <EmptyState />;
    }
    
    return (
        <footer className="flex flex-col items-start gap-10 self-stretch bg-backgroundSecondary px-24 pt-14 pb-7">
            <div className="flex items-start justify-between self-stretch">
                <div className="flex w-120 flex-col items-start gap-6">
                    <div className="flex items-center gap-[11.312px]">
                        <img src="/rectangle.svg" alt="" />
                        <img src="/gdgoc_ugm.svg" alt="" />
                    </div>
                    <p className="text-base font-normal leading-[155%] text-paragraph">
                        A student community for curious minds, shared learning, and technology with purpose.
                    </p>
                </div>

                <div className="flex w-37.5 flex-col items-start gap-3.5">
                    <span className="font-['Google_Sans'] text-base font-bold leading-normal text-black">
                        Explore
                    </span>
                    {navigation.map((nav) => (
                        <NavLink 
                        key={nav.label} 
                        to= {nav.href}
                        className="text-[15px] font-normal leading-normal text-paragraph active:scale-95"
                        >
                            {nav.label}
                        </NavLink>
                ))}
                </div>

                <div className="flex w-65 flex-col items-start gap-4">
                    <span className="text-base font-bold leading-normal text-black">
                        Keep in the loop
                    </span>
                    <span className="text-lg font-normal leading-normal text-textSecondary">
                        @gdgoc_ugm
                    </span>
                    <div className="flex items-start gap-4">
                        <a href="https://www.instagram.com/gdgoc.ugm?vrfl=cGNqOWN6bDd0cHM5"
                        target="_blank"><img src="/public/instagram.svg" alt="" /></a>
                        <a href="https://m.youtube.com/@gdgocugm"
                        target="_blank"><img src="/public/youtube.svg" alt="" /></a>
                    </div>
                </div>
            </div>

            <hr className="h-px w-full border-0 bg-[#DADCE0]" />

            <div className="flex items-start justify-between self-stretch">
                <span className="text-xs font-normal leading-normal text-paragraph">
                    © GDGoC Universitas Gadjah Mada • 2026/2027
                </span>
                <span className="text-xs font-normal leading-normal text-paragraph">
                    Made for the campus. Open to possibilities.
                </span>
            </div>
        </footer>
    );
}