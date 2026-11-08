import { Spinner } from "../../StatusViews";
import { ErrorMessage } from "../../StatusViews";
import { EmptyState } from "../../StatusViews";

import useFetch from "../../../hooks/useFetch";
import { getFormats } from "../../../../api/api";

import FormatCard from "./FormatsCard";
import SectionIntro from "../../SectionIntro";

export default function Formats({id}) {
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
        <section id={id}
        className="flex flex-col items-start gap-9 self-stretch bg-backgroundSecondary px-24 py-20">
            <SectionIntro
                label="WAYS TO LEARN"
                title="Explore the kinds of experiences that help you move from understanding to doing."
            />

            <div className="flex items-start gap-6 self-stretch">
                <FormatCard format={formats[0]} className="bg-[#EAF2FF]" />
                <FormatCard format={formats[2]} className="bg-[#EAF5ED]" />
            </div>

            <div className="flex items-start gap-6 self-stretch">
                <FormatCard format={formats[1]} className="bg-[#FFF7DF]" />
                <FormatCard format={formats[3]} className="bg-[#FDEDEA]" />
            </div>
        </section>
    );
}