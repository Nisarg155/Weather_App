// components/HourlyCarouselLoader.tsx
export default function HourlyCarouselLoader({count = 10}: { count?: number }) {
    return (
        <div className="mt-4 mb-4 overflow-x-scroll scrollbar-hide ">
            <div className="flex gap-4 px-1">
                {Array.from({length: count}).map((_, i) => (
                    <div
                        key={i}
                        className="min-w-[84px] rounded-lg bg-slate-800/50 px-3 py-3 text-center"
                        role="status"
                        aria-label="Loading hourly item"
                    >
                        <div className="h-3 w-12 mx-auto rounded bg-slate-700/50 animate-pulse"/>
                        <div className="mx-auto my-2 h-8 w-8 rounded-full bg-slate-700/50 animate-pulse"/>
                        <div className="h-4 w-10 mx-auto mt-1 rounded bg-slate-700/50 animate-pulse"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
