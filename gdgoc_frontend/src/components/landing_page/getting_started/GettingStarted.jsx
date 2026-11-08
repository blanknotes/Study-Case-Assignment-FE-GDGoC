import GSHeader from "./GSHeader"
import GParticipationJourney from "./GParticipationJourney"

export default function GettingStarted() {
    return (
        <section className="flex flex-col items-start gap-5 self-stretch px-24 pt-2 pb-22">
            <GSHeader />
            <GParticipationJourney />
        </section>
    )
}