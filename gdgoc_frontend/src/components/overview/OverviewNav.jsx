
export default function OverviewNav() {
    return (
        <div className="flex items-start gap-12 self-stretch px-24 py-6 border-y border-[#DADCE0]">
            <div className="flex items-center gap-2.5">
                <a href="#LearningTrack"
                className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    Learning tracks
                </a>
                <a href="#LearningTrack"
                className="font-['Inter'] text-base font-normal leading-normal text-textSecondary">
                    ↓
                </a>
            </div>    

            <div className="flex items-center gap-2.5">
                <a href="#LearningFormats"
                className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    Learning formats
                </a>
                <a href="#LearningFormats"
                className="font-['Inter'] text-base font-normal leading-normal text-textSecondary">
                    ↓
                </a>
            </div>    

            <div className="flex items-center gap-2.5">
                <a href="#LearningJourney"
                className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    Your learning journey
                </a>
                <a href="#LearningJourney"
                className="font-['Inter'] text-base font-normal leading-normal text-textSecondary">
                    ↓
                </a>
            </div>  
            

            <div className="flex items-center gap-2.5">
                <a href="#StartingPoint"
                className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    Find a starting point
                </a>
                <a href="#StartingPoint"
                className="font-['Inter'] text-base font-normal leading-normal text-textSecondary">
                    ↓
                </a>
            </div>      
        </div>
    );
}