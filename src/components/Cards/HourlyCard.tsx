// components/HourlyCarousel.tsx
import HourlyCarouselLoader from "../Loaders/HourlyCarouselLoader";
import Image from "next/image";
import {HourlyArray} from '@/types/weather.types'
import {Scale} from "@/types/store.types";

export function HourlyCarousel({hourly,scale}: { hourly: HourlyArray; scale:Scale }) {
    // show loader if no data
    if (!hourly || hourly.length === 0) {
        return <HourlyCarouselLoader/>;
    }


    return (
        <div className="mt-4 mb-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 px-1">
                {hourly.map((item, idx) => (
                    <div
                        key={idx}
                        className="min-w-[100px] rounded-lg  bg-gradient-to-br from-slate-800/80 to-slate-800/60 px-4 py-4 text-center"
                    >
                        <div className="text-sm font-medium ">{item.time}</div>
                        <Image src={item.icon?.startsWith("//") ? `https:${item.icon}` : item.icon} alt="icon"
                               width={100} height={100} className="mx-auto my-1 h-10 w-10"/>
                        <div className={'text-sm font-medium'}>{item.text}</div>
                        <div className="text-sm font-medium"> {scale === 'C' ?  Math.round(item.temp_c) : Math.round(item.temp_f)}°</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
