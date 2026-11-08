import { Spinner } from "../../StatusViews";
import { ErrorMessage } from "../../StatusViews";
import { EmptyState } from "../../StatusViews";

import useFetch from "../../../hooks/useFetch";
import { getJourney } from "../../../../api/api";

import JourneyStages from "./JourneyStages";
import SectionIntro from "../../SectionIntro";

export default function Journey({id}) {
    const {
        data: stages,
        loading,
        error,
        retry
    } = useFetch(getJourney);

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

    if (stages.length === 0) {
        return <EmptyState />;
    }

    return (
        <section id={id}
        className="flex flex-col items-start gap-10 self-stretch px-24 py-20">
            <SectionIntro 
                label="PROGRESS. NOT PERFECTION"
                title="A journey you can keep building on."
            />

            <div className="flex items-start gap-8 self-stretch">
                {stages.map((stage) => (
                    <JourneyStages
                        key={stage.id}
                        stage={stage}
                    />
                ))}
            </div>
        </section>
    )
}