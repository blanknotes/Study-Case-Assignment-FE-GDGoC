export default function() {
    return(
        <div className="flex w-200 flex-col items-start gap-4.5">
            <div className="flex items-center gap-2.5">
                <img src="/marker.svg" alt="" className="h-[7px] w-[7px]" />
                <span className="text-xs font-medium leading-normal tracking-normal text-paragraph uppercase">
                    MAKE YOUR MOVE
                </span>
            </div>

            <h2 className="self-stretch text-[48px] font-bold leading-[112%] text-[#242424]">
                You don’t need to have it all figured out.
            </h2>
        </div>
    )
}