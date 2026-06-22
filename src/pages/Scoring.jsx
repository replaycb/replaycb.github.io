const categories = [
    {
        category: "Vocals",
        points: 45,
        rubricLabel: "Vocal Rubric",
        rubricUrl:
            "https://docs.google.com/spreadsheets/d/1TsYBXvKXsNnWGTYH8F94yumqjmFGwKKd2_TNyZ3YoW4/edit?usp=sharing",
    },
    {
        category: "Mix",
        points: 45,
        rubricLabel: "Mix Rubric",
        rubricUrl:
            "https://docs.google.com/spreadsheets/d/1fdseL7gBQS5C-h2kurFnf_Mwcciv_bjqQNQjxSfNfnc/edit?usp=sharing",
    },
    {
        category: "Art",
        points: 45,
        rubricLabel: "Art Rubric",
        rubricUrl:
            "https://docs.google.com/spreadsheets/d/1moQ_58GjnLufUEnpzuwHpxJ86dKYQEuYrjeY45mgCSs/edit?usp=sharing",
    },
    {
        category: "Animation",
        points: 45,
        rubricLabel: "Animation Rubric",
        rubricUrl:
            "https://docs.google.com/spreadsheets/d/1LrTtwIUP_zltUSJKv-jaawMH36NQCmH521K3a7GOWZc/edit?usp=sharing",
    },
    {
        category: "Overall Audio",
        points: 10,
        rubricLabel: null,
        rubricUrl: null,
    },
    {
        category: "Overall Visuals",
        points: 10,
        rubricLabel: "N/A",
        rubricUrl: null,
    },
];

const total = categories.reduce((sum, r) => sum + r.points, 0);

// Column widths — edit these to adjust the grid
const COL_CATEGORY = "minmax(0, 1.5fr)";
const COL_DIVIDER = "1px";
const COL_POINTS = "70px";
const COL_RUBRIC = "minmax(0, 1fr)";
const GRID_COLS = `${COL_CATEGORY} ${COL_DIVIDER} ${COL_POINTS} ${COL_DIVIDER} ${COL_RUBRIC}`;

const DIVIDER_STYLE = {
    background: "rgba(166,0,0,0.25)",
    alignSelf: "stretch",
};

function RubricButton({ href, label }) {
    return href ? (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-arose text-[8px] md:text-[12px] uppercase text-white transition-all duration-200 hover:brightness-125 flex items-center justify-center w-full px-2"
            style={{
                background: "#a60000",
                maxWidth: "160px",
                height: "28px",
            }}
        >
            {label}
        </a>
    ) : (
        <span
            className="font-arose text-[16px] sm:text-[18px] tracking-[0.2em] uppercase text-[#a60000] flex items-center justify-center"
            style={{ height: "28px" }}
        >
            N/A
        </span>
    );
}

export default function Scoring() {
    return (
        <main className="max-w-2xl mx-auto px-6 py-16">
            {/* Page header */}
            <div className="text-center mb-12">
                <h1 className="text-6xl font-arose font-bold text-white mb-3">
                    Scoring & Rubrics
                </h1>
                <div className="text-left my-8 border-l-1 border-[#a60000] pl-6">
                    <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                        Replay Chorus Battle scoring is based on a 200-point
                        system across 6 categories. At the end of each round,
                        all 8 judges will submit scores using the rubrics linked
                        below. These were developed by the RE:CB judges and are
                        intended to provide a consistent and transparent
                        framework for evaluation.
                    </p>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto ">
                        After deductions are applied, the top 50% of groups
                        based on total score will advance to the next round. A
                        sample scoresheet is provided below for reference.
                    </p>
                </div>
            </div>

            {/* Outer wrapper: left accent bar + grid */}
            <div
                className="flex"
                style={{ border: "1px solid rgba(166,0,0,0.45)" }}
            >
                {/* Left red accent bar */}
                <div
                    className="w-1 shrink-0"
                    style={{ background: "#a60000" }}
                />

                <div className="flex-1 min-w-0">
                    {/* ── Header row ── */}
                    <div
                        className="grid items-center"
                        style={{
                            gridTemplateColumns: GRID_COLS,
                            borderBottom: "2px solid #a60000",
                        }}
                    >
                        <div className="px-3 sm:px-6 py-5 font-arose text-base sm:text-xl text-[#a60000]">
                            Categories
                        </div>
                        <div style={DIVIDER_STYLE} />
                        <div className="py-5 font-arose text-base sm:text-xl text-[#a60000] text-center">
                            Points
                        </div>
                        <div style={DIVIDER_STYLE} />
                        <div className="py-5 font-arose text-base sm:text-xl text-[#a60000] text-center">
                            Rubrics
                        </div>
                    </div>

                    {/* ── Body rows ── */}
                    {categories.map((row) => (
                        <div
                            key={row.category}
                            className="grid items-center transition-colors duration-150 hover:bg-[rgba(166,0,0,0.07)]"
                            style={{
                                gridTemplateColumns: GRID_COLS,
                                borderBottom:
                                    "1px solid rgba(255,255,255,0.06)",
                            }}
                        >
                            <div className="px-3 sm:px-6 py-4 font-arose text-white text-sm sm:text-base tracking-wide">
                                {row.category}
                            </div>
                            <div style={DIVIDER_STYLE} />
                            <div className="py-4 font-arose text-white text-sm sm:text-base text-center tabular-nums">
                                {row.points}
                            </div>
                            <div style={DIVIDER_STYLE} />
                            <div className="py-4 flex items-center justify-center">
                                <RubricButton
                                    href={row.rubricUrl}
                                    label={row.rubricLabel}
                                />
                            </div>
                        </div>
                    ))}

                    {/* ── Footer / Total Score row ── */}
                    <div
                        className="grid items-center"
                        style={{
                            gridTemplateColumns: GRID_COLS,
                            borderTop: "2px solid #a60000",
                        }}
                    >
                        {/* Label with ornament */}
                        <div className="px-3 sm:px-8 py-7 flex items-center gap-2 sm:gap-3">
                            <span
                                className="text-[#a60000] hidden sm:inline"
                                style={{
                                    fontSize: "8px",
                                    letterSpacing: "4px",
                                }}
                            >
                                ◆◆◆
                            </span>
                            <span className="font-arose text-base sm:text-xl tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#a60000]">
                                Total Score
                            </span>
                        </div>
                        <div style={DIVIDER_STYLE} />
                        {/* Glowing total */}
                        <div className="py-7 text-center tabular-nums">
                            <span className="font-arose font-bold text-4xl text-white">
                                {total}
                            </span>
                        </div>
                        <div style={DIVIDER_STYLE} />
                        {/* Example Scoresheet button */}
                        <div className="py-7 flex items-center justify-center">
                            <RubricButton
                                href="https://docs.google.com/spreadsheets/d/1S4hQnBSyyjPQnHFTkJWYVnXHvPQPq4XlEDiZhUnJdNA/edit?usp=sharing"
                                label="Example Scoresheet"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-left my-8 border-l-1 border-[#a60000] pl-6">
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                    Replay Chorus Battle will feature a{" "}
                    <span className="font-bold">Judge's Choice</span> system,
                    where each judge may select their favorite entry of the
                    round. Each judge may select only one entry per round. To be
                    cognizant of any unintentional bias, these selections are
                    made independently of the scoring process and do not
                    influence a group's score, ranking, or advancement{" "}
                    <span className="font-bold">
                        (i.e., all Judge's Choice awards are worth 0 points)
                    </span>
                    .
                </p>
                <p className="text-white/80 text-lg max-w-2xl mx-auto ">
                    Groups that receive a Judge's Choice award will see it
                    displayed at the bottom of their scoresheets. These awards
                    are a fun way for judges to recognize an entry that they
                    particularly enjoyed.
                </p>
            </div>
        </main>
    );
}
