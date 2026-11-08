import IntroHeader from "./IntroHeader";
import IntroStory from "./IntroStory";

export default function CommIntro(){
    return (
        <section className="flex items-start gap-24 self-stretch px-24 py-22">
            <IntroHeader />
            <IntroStory />
        </section>
    );
}