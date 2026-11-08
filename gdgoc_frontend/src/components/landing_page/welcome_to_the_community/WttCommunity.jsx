import HeroCopy from "./HeroCopy";
import IdeasCT from "./IdeasCT";
import CommunityPromises from "./CommunityPromises";

export default function WttComm() {
    return(
        
        <main className="flex flex-col items-start self-stretch">
            <div className="flex items-center gap-10 self-stretch px-24 py-20 justify-between">
                <HeroCopy />
                <IdeasCT />
            </div>

            <CommunityPromises />
        </main>
    );
}