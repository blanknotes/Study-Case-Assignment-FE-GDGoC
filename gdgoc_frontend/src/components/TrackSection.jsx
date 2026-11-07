import { useState, useEffect } from "react";
import { getTracks } from "../../api/api";

import SectionIntro from "./SectionIntro";
import TrackCard from "./TrackCard";

import {
    Spinner,
    ErrorMessage,
    EmptyState
} from "./StatusViews";

export default function TrackSection() {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    async function load() {
        try {
            setLoading(true);
            setError("");

            const data = await getTracks();
            setTracks(data);

        } catch (err) {
            console.error(err)
            setError("Gagal mengambil data track.");

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, []);

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