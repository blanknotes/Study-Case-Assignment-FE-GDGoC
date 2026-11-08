import { Spinner, ErrorMessage, EmptyState } from "../../StatusViews";

import useFetch from "../../../hooks/useFetch";
import { getFormats } from "../../../../api/api";

import LFCard from "./LFCard";
import SectionIntro from "../../SectionIntro";

export default function LearningFormats() {
    const {
        data: formats,
        loading,
        error,
        retry
    } = useFetch(getFormats);

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

    if (formats.length === 0) {
        return <EmptyState />;
    }
    
    return (
        <section className="flex flex-col items-start gap-9 self-stretch bg-backgroundSecondary px-24 py-20">
            <SectionIntro
                label="MORE THAN A CLASSROOM"
                title="Less watching. More making."
                text1="Learn in a way that turns a new concept into something you can actually use."
            />

            <div className="flex items-start gap-6 self-stretch">
                {formats.slice(0,3).map((format) => (
                    <LFCard
                        key={format.id}
                        format={format}
                    />
                ))}
            </div>
        </section>
    );
}