export default function CommunityPromises() {
    return (
        <div className="flex items-start justify-between self-stretch border-y border-[#DADCE0] px-24 py-6.5">
            <div className="flex items-center gap-3.5">
                <span className="h-2 w-2 bg-boxes" />
                <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    Learn by doing
                </span>
            </div>    

            <div className="flex items-center gap-3.5">
                <span className="h-2 w-2 bg-[#EA4335]" />
                <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    Connect across disciplines
                </span>
            </div>

            <div className="flex items-center gap-3.5">
                <span className="h-2 w-2 bg-[#34A853]" />
                <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    Build with purpose
                </span>
            </div>
        </div>
    );
}