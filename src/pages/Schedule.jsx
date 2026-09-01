const rounds = [
    {
        round: "Registration",
        submission: "Jul 1 – Aug 31",
        judging: "",
        results: "",
    },
    {
        round: "Round 1",
        submission: "Sep 1 – Oct 31",
        judging: "Nov 1 – Nov 7",
        results: "Nov 8",
    },
    {
        round: "Round 2",
        submission: "Nov 15 – Jan 16",
        judging: "Jan 16 – Jan 23",
        results: "Jan 24",
    },
    {
        round: "Round 3",
        submission: "Feb 1 – April 3",
        judging: "April 3 – April 10",
        results: "April 11",
    },
];

export default function Schedule() {
    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
                <h1 className="text-6xl font-arose font-bold text-white mb-3">
                    Schedule
                </h1>
            </div>

            <div className="max-w-lg mx-auto flex flex-col">
                {rounds.map(({ round, submission, judging, results }, i) => (
                    <div key={round} className="flex gap-6">
                        {/* Timeline spine */}
                        <div className="flex flex-col items-center">
                            <div className="w-2.5 h-2.5 rounded-full bg-main-100 mt-1 shrink-0" />
                            {i < rounds.length - 1 && (
                                <div className="w-px flex-1 bg-white/10 my-1" />
                            )}
                        </div>

                        {/* Content */}
                        <div className="pb-10">
                            <h2
                                className={`text-3xl font-arose mb-2 ${round === "Round 1" ? "animate-pulse-red-white" : "text-white"}`}
                            >
                                {round}
                            </h2>
                            <div className="flex flex-col gap-1 text-lg text-white/60">
                                <span>{submission}</span>
                                {judging && (
                                    <span className="text-white/40">
                                        Judging: {judging}
                                    </span>
                                )}
                                {results && (
                                    <span className="text-white/40">
                                        Results: {results}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mb-16">
                <h1 className="text-xs font-normal text-white/50 mb-3">
                    Schedule is tentative and may be subject to slight changes.
                </h1>
            </div>
        </main>
    );
}
