import { Link } from "react-router-dom";
import SectionIntro from "../SectionIntro";
import { ArrowIcon } from "../icons/arrowIcon";


export default function CommunityInvitation() {
    return (
        <div className="flex flex-col items-start self-stretch px-24 py-16">
            <div className="flex items-center justify-between gap-12 self-stretch rounded-4xl bg-[#EAF2FF] p-12">
                {/*Invitation Panel */}
                <SectionIntro 
                label="YOUR NEXT CHAPTER"
                title="Bring your curiosity. We’ll build from there"
                text1="Find a learning track, meet a collaborator, or start a conversation."
                />

                <div className="flex w-65 flex-col items-start gap-4">
                    <div className="flex h-13 items-center gap-4 rounded-lg border border-[rgba(255,255,255,0)] bg-boxes px-6 transition-all duration-200 ease-in-out hover:border-textSecondary hover:bg-[#025efc] active:scale-[0.95] active:bg-[#2b75f3]">
                        <Link
                        to="/Overview"
                        className="flex h-13 items-center gap-4 text-base font-medium leading-normal text-white ">
                            Explore the overview
                            <ArrowIcon />
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/pages/*"
                            className="flex items-center text-[16px] font-medium text-textSecondary gap-3"
                        >
                            Talk to the community
                            <ArrowIcon color="#1967D2" />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
}