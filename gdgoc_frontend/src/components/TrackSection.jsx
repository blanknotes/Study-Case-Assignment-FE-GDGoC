import useFetch from "../hooks/useFetch";
import { getTracks } from "../../api/api";

import SectionIntro from "./TrackIntro";
import TrackCard from "./TrackCard";

export default function TrackSection() {
    const {
        data: tracks,
        loading,
        error
    } = useFetch(getTracks);

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return (
            <ErrorMessage
             message={error}
             onRetry={load}
            />
        );
    }

    if (tracks.length === 0) {
        return <EmptyState />;
    }
    
    return (
        <section className="flex flex-col items-start gap-9 self-stretch px-24 pt-4 pb-22">
            <SectionIntro
                label="FIND YOUR STARTING POINT"
                title="Many interests. One shared journey."
                text="Follow what excites you. Explore a track, then connect the dots with others."
                linkLabel="See the overview"
                linkTo="/pages/Overview"
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