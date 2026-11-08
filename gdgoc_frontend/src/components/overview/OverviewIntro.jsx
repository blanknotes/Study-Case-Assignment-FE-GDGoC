export default function OverviewIntro() {
    return(
        <main className="flex items-center gap-16 self-stretch px-24 pt-16 pb-14">
            {/*Headline */}
            <div className="flex w-230 flex-col items-start gap-6">
                {/*Section Label */}
                <div className="flex items-center gap-2.5">
                    <img src="/marker.svg" alt="" className="h-[7px] w-[7px]" />
                    <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                        Overview • Programs & learning tracks
                    </span>
                </div>

                <h2 className="text-[72px] font-bold leading-[108%]">
                    <span className="block text-[#242424]">
                        Find your spark.
                    </span>

                    <span className="block text-textSecondary">
                        Build your own path.
                    </span>
                </h2>

                <p className="text-[21px] font-normal leading-[155%] text-paragraph">
                    Explore how research, creativity, and development connect. Start with one interest. Grow through practice and the people around you.
                </p>
            </div>

            <img src="/public/hustler.svg" alt="" />
        </main>
    );
}