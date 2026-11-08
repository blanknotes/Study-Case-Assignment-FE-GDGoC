import useFetch from "../../../hooks/useFetch";
import { getFAQs } from "../../../../api/api";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../icons/arrowIcon";

import { Spinner } from "../../StatusViews";
import { ErrorMessage } from "../../StatusViews";
import { EmptyState } from "../../StatusViews";

import FaqAnswer from "./FaqAnswer";

export default function Faqs() {
    const {
        data: answers,
        loading,
        error,
        retry
    } = useFetch(getFAQs);

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

    if (answers.length === 0) {
        return <EmptyState />;
    }

    return (
        <section className="flex items-start gap-24 self-stretch px-24 py-22">

            {/*FAQ Introduction */}
            <div className="flex w-100 flex-col items-start gap-5">
                <div className="flex items-center gap-2.5">
                    <img src="/marker.svg" alt="" className="h-1.75 w-1.75" />
                    <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                        A FEW GOOD QUESTIONS
                    </span>
                </div>

                <h2 className="self-stretch text-[48px] font-bold leading-[112%] text-[#242424]">
                    Wondering where to begin?
                </h2>

                <div className="flex items-center gap-3">
                    <Link
                        to="/pages/Contact"
                        className="flex items-center text-[16px] font-medium text-textSecondary gap-3"
                    >
                        Ask us a question
                        <ArrowIcon color="#1967D2" />
                    </Link>
                </div>
            </div>

            <div className="flex flex-[1_0_0] flex-col items-stretch gap-6 grid-cols-3 max-h-100 overflow-y-auto">
                {answers.map((answer) => (
                    <FaqAnswer
                        key={answer.id}
                        answer={answer}
                    />
                ))}
            </div>
        </section>
    );
}