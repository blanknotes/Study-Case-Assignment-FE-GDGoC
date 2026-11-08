import useFetch from "../../../hooks/useFetch";
import { getTracks } from "../../../../api/api";

import { Spinner } from "../../StatusViews";
import { ErrorMessage } from "../../StatusViews";
import { EmptyState } from "../../StatusViews";

import SectionIntro from "../../SectionIntro";
import TrackCard from "./TrackCard";

export default function TrackSection({id}) {
    const {
        data: tracks,
        loading,
        error,
        retry
    } = useFetch(getTracks);

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

    if (tracks.length === 0) {
        return <EmptyState />;
    }
    
    return (
        <section id={id}
        className="flex flex-col items-start gap-9 self-stretch px-24 pt-4 pb-22">
            <SectionIntro
                label="FIND YOUR STARTING POINT"
                title="Many interests. One shared journey."
                text1="Follow what excites you. Explore a track, then connect the dots with others."
                linkLabel="See the overview"
                linkTo="/Overview"
            />
            <div className="flex items-start gap-6 self-stretch">
                {tracks.map((track) => (
                    <TrackCard
                        key={track.id}
                        track={track}
                    />
                ))}
            </div>

        </section>
    );
}