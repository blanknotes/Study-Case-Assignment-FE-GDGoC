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
        <nav className="flex h-26 items-center justify-between self-stretch border-b border-[#DADCE0] px-16">
            <div className="flex items-center gap-[11.312px]">
                <img src="/rectangle.svg" alt="" />
                <img src="/gdgoc_ugm.svg" alt="" />
            </div>

            <div className="flex items-center gap-8">
                {navigation.map((nav) => (
                    <NavLink 
                    key={nav.label} 
                    to= {nav.href}
                    className={({ isActive }) =>
                    `rounded-full px-5 py-3.5 transition-colors duration-200 active:scale-95
                    ${isActive
                        ? "bg-[#EAF2FF] font-medium text-textSecondary"
                        : "font-normal leading-normal text-paragraph hover:bg-[#EAF2FF] hover:text-textSecondary"
                        }`
                    }>
                        {nav.label}
                    </NavLink>
                ))}
            </div>

            <div className="flex h-13 items-center gap-4 rounded-lg border border-[rgba(255,255,255,0)] bg-boxes px-6 transition-all duration-200 ease-in-out hover:border-textSecondary hover:bg-[#025efc] active:scale-[0.95] active:bg-[#2b75f3]">
                <NavLink
                to="/Overview"
                className="flex h-13 items-center gap-4 text-base font-medium leading-normal text-white ">
                    Find Your Track
                    <ArrowIcon />
                </NavLink>
            </div>
        </nav>
    );
}