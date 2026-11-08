export default function() {
    return (
        <div className="flex items-center gap-16 self-stretch bg-[#EAF5ED] px-24 py-16">
            <img src="/public/community_spark.svg" alt="" />

            {/*Belonging copy */}
            <div>
                <h3 className="self-stretch text-[40px] font-bold leading-[112%] text-[#242424]">
                    Different majors. Different starting points. A place for all of them.
                </h3>

                <p className="text-lg font-normal leading-[155%] text-paragraph">
                    You don’t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start.
                </p>
            </div>
        </div>
    )
}