import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Rules() {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);
    const section5Ref = useRef(null);

    useEffect(() => {
        const sections = [
            { el: section1Ref.current, x: -80 },
            { el: section2Ref.current, x: 80 },
            { el: section3Ref.current, x: -80 },
            { el: section4Ref.current, x: 80 },
            { el: section5Ref.current, x: -80 },
        ];

        sections.forEach(({ el, x }) => {
            if (!el) return;
            const h3 = el.querySelector("h3");
            const ol = el.querySelector("ol");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
            tl.fromTo(
                h3,
                { x, opacity: 0 },
                { x: 0, opacity: 1, duration: 2, ease: "power3.out" },
            ).fromTo(
                ol,
                { x, opacity: 0 },
                { x: 0, opacity: 1, duration: 2, ease: "power3.out" },
                "-=1.5",
            );
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <main className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
                <h1 className="text-6xl font-arose font-bold text-white mb-3">
                    Rules
                </h1>
            </div>

            <section ref={section1Ref}>
                <h3 className="text-5xl font-arose text-white mb-2">
                    Section 1:{" "}
                    <span className="text-main-100">Team Information</span>
                </h3>
                <ol type="1" className="list-decimal list-outside pl-6 mb-8">
                    <li className="text-white text-lg mb-5 font-semibold">
                        Team Size
                        <ul className="font-normal text-white/80 mt-1 leading-relaxed list-disc list-outside pl-5">
                            <li>Teams may consist of 3–8 vocalists.</li>
                            <li>
                                Teams may also include up to 6 staff-only
                                members.
                            </li>
                            <p className="pl-4 border-l border-white/20 italic">
                                i.e., The minimum number of team members is 3
                                and the maximum is 14.
                            </p>
                            <li>
                                Participants may only join one team at any given
                                time.
                            </li>
                        </ul>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Registration Requirements
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            Teams must be fully formed by the time of
                            registration. <br />
                            Each team must designate:
                            <ul
                                type="disc"
                                className="list-disc list-outside pl-5 my-2"
                            >
                                <li>1 Team Leader</li>
                                <li>1 Co-Leader</li>
                            </ul>
                            Leaders will be responsible for all official
                            communication. Both leaders will be contacted for
                            deliverables such as scoresheets.
                        </p>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Registration Cap
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            As of now, there is no limit to the number of teams
                            that may register.
                        </p>
                    </li>
                </ol>
            </section>

            <section ref={section2Ref} className="text-right">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div></div>
                    <div className="col-span-2">
                        <h3 className="text-5xl font-arose text-white mb-2 text-left">
                            Section 2:{" "}
                            <span className="text-main-100">
                                Competition Theme
                            </span>
                        </h3>
                        <ol
                            type="1"
                            className="list-decimal list-outside pl-6 mb-8 text-left ml-auto w-fit"
                        >
                            <li className="text-white text-lg mb-5 font-semibold">
                                Competition Theme
                                <ul className="font-normal text-white/80 mt-1 leading-relaxed list-disc list-outside pl-5">
                                    <li>
                                        RE:CB is a chorus battle with the
                                        limitation that teams must cover songs
                                        that have been entered in at least one
                                        previous chorus battle.
                                    </li>
                                    <p className="pl-4 border-l border-white/20 italic my-1">
                                        While we encourage participants to take
                                        song inspiration, we are{" "}
                                        <strong className="text-white">
                                            not
                                        </strong>{" "}
                                        asking teams to remake other teams'
                                        chorus battle entries.
                                    </p>
                                    <li>
                                        Original songs are not permitted, as
                                        they do not fit the event theme.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Round Themes
                                <p className="font-normal text-white/80 mt-1 leading-relaxed">
                                    A new theme will be announced at the start
                                    of each round to guide song selection.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section ref={section3Ref}>
                <h3 className="text-5xl font-arose text-white mb-2">
                    Section 3:{" "}
                    <span className="text-main-100">Submission Guidelines</span>
                </h3>
                <ol type="1" className="list-decimal list-outside pl-6 mb-8">
                    <li className="text-white text-lg mb-5 font-semibold">
                        Video Title Format
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            YouTube uploads must follow this format:
                            <br />
                            【RE:CB-R#】Song Name【Team Name】
                        </p>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Song Length
                        <ul
                            type="disc"
                            className="list-disc list-outside pl-5 my-2 font-normal text-white/80 mt-1 leading-relaxed"
                        >
                            <li>
                                Entries must be at least 2 minutes and 45
                                seconds long.
                            </li>
                            <li>There is no maximum length requirement.</li>
                        </ul>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Required Submission Files
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            Teams must provide the following materials upon
                            submission:
                            <ul className="list-disc list-outside pl-5 mt-2">
                                <li>
                                    A link to the CB Entry whose song you chose
                                </li>
                                <li>Script (Doc, Sheet)</li>
                                <li>Alternate video link (.mp4)</li>
                                <li>Mix file (.wav)</li>
                                <li>Acapella file (.mp3)</li>
                                <li>
                                    All artwork created for the entry (.png)
                                </li>
                                <li>
                                    A document listing all external assets used
                                    in the creation of the submission
                                </li>
                            </ul>
                        </p>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Allowed Song Edits
                        <ul className="list-disc list-outside pl-5 mt-2 text-white/80 font-normal leading-relaxed">
                            <li> Translyrics are permitted.</li>
                            <li>
                                Instrumental remakes and remixes are permitted.
                            </li>
                            <li>
                                Mashups are permitted, with the caveat that the
                                songs chosen must be from the same CB.
                            </li>
                        </ul>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Upload Requirements
                        <ul className="list-disc list-outside pl-5 mt-2 text-white/80 font-normal leading-relaxed">
                            <li>
                                Entries must be publicly available on YouTube at
                                the time of submission (public, unlisted) and
                                viewable from the official CB playlist.
                            </li>
                            <li>
                                Private uploads will not be accepted. Other
                                participants must be able to view your
                                submission.
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>

            <section ref={section4Ref} className="text-right">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div></div>
                    <div className="col-span-2">
                        <h3 className="text-5xl font-arose text-white mb-2 text-left">
                            Section 4:{" "}
                            <span className="text-main-100">Penalties</span>
                        </h3>
                        <ol
                            type="1"
                            className="list-decimal list-outside pl-6 mb-8 text-left ml-auto w-fit"
                        >
                            <li className="text-white text-lg mb-5 font-semibold">
                                Deadlines & Grace Period
                                <ul className="list-disc list-outside pl-5 mt-2 text-white/80 font-normal leading-relaxed">
                                    <li>
                                        Each round deadline will be at 11:59 PM
                                        Central Time on the listed due date.
                                    </li>
                                    <li>
                                        A 24-hour grace period will follow each
                                        deadline.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Plagiarism
                                <ul className="list-disc list-outside pl-5 mt-1 font-normal text-white/80 leading-relaxed space-y-2">
                                    <li>
                                        While Replay Chorus Battle encourages
                                        participants to revisit and celebrate
                                        past chorus battle entries, plagiarism
                                        and excessive referencing of existing
                                        works are strictly prohibited and may
                                        result in heavy penalties or
                                        disqualification. This includes, but is
                                        not limited to, copying original adlib
                                        arrangements, tracing artwork,
                                        plagiarizing MVs, or using other entries
                                        in your own entry.
                                    </li>
                                    <li>
                                        Inspiration is expected and encouraged
                                        but participants are expected to
                                        exercise reasonable judgment and create
                                        work that is ultimately original to
                                        their team.
                                    </li>
                                    <li>
                                        Exceptions may be made in cases where
                                        explicit permission has been granted by
                                        the original CB team to reference
                                        specific elements of an entry (for
                                        example, a harmony arrangement).
                                        However, judges may still take the level
                                        of originality into consideration when
                                        evaluating creativity-related
                                        categories.
                                    </li>
                                    <li>
                                        An additional exception applies to teams
                                        recreating or paying tribute to their
                                        own past chorus battle entries.
                                        <p className="pl-4 border-l border-white/20 italic mt-1">
                                            E.g., Me and my friends did a CB
                                            entry of &ldquo;Dakini&rdquo; 10
                                            years ago and would like to recreate
                                            our old entry.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                Render Difficulties
                                <ul className="list-disc list-outside pl-5 mt-1 font-normal text-white/80 leading-relaxed space-y-2">
                                    <li>
                                        Render issues will not exempt
                                        participants from grace period
                                        penalties. However, if a team is still
                                        experiencing rendering difficulties or
                                        errors by the end of the grace period,
                                        they may receive an additional 12 hours
                                        to submit provided that proof of the
                                        issue is submitted before the grace
                                        period ends. Full grace penalties will
                                        still apply.
                                    </li>
                                    <li>
                                        Proof of render difficulties will be
                                        requested in a screenshot format with
                                        the estimated render time remaining +
                                        file name visible.
                                    </li>
                                </ul>
                            </li>
                            <li className="text-white text-lg mb-5 font-semibold">
                                AI Policy
                                <ul className="list-disc list-outside pl-5 mt-1 font-normal text-white/80 leading-relaxed space-y-2">
                                    <li>
                                        Replay Chorus Battle has a strict
                                        anti-AI policy. The use of AI-generated
                                        content may result in severe score
                                        deductions and may lead to
                                        disqualification.
                                    </li>
                                    <li>
                                        We urge participants to be vigilant when
                                        looking for external assets.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>

            <section ref={section5Ref}>
                <h3 className="text-5xl font-arose text-white mb-2">
                    Section 5:{" "}
                    <span className="text-main-100">Judging Information</span>
                </h3>
                <ol type="1" className="list-decimal list-outside pl-6 mb-8">
                    <li className="text-white text-lg mb-5 font-semibold">
                        Competition Structure
                        <ul className="list-disc list-outside pl-5 mt-1 font-normal text-white/80 leading-relaxed space-y-2">
                            <li>
                                The competition will consist of 3 total rounds.
                            </li>
                            <li>
                                Approximately 50% of participating teams from
                                each round will advance to the next round.
                            </li>
                        </ul>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Critiques
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            Teams may request critiques in any of the following
                            categories:
                            <ul
                                type="disc"
                                className="list-disc list-outside pl-5 mt-2"
                            >
                                <li>Vocals</li>
                                <li>Mixing</li>
                                <li>Art</li>
                                <li>Animation</li>
                            </ul>
                        </p>
                    </li>
                    <li className="text-white text-lg mb-5 font-semibold">
                        Scoresheets
                        <p className="font-normal text-white/80 mt-1 leading-relaxed">
                            Scoresheets and critiques will be distributed after
                            each judging period concludes.
                        </p>
                    </li>
                </ol>
            </section>
        </main>
    );
}
