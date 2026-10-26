import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import logoImage from "../assets/RECB_Logo.png";

gsap.registerPlugin(ScrollTrigger);

// Jul 1, 2026 12:00 PM CDT (UTC−5)
const REG_OPEN = new Date("2026-07-01T17:00:00Z").getTime();
// Aug 31, 2026 11:59 PM CDT (UTC−5)
const REG_CLOSE = new Date("2026-09-01T04:59:00Z").getTime();
// Oct 31, 2026 11:59 PM CDT (UTC−5)
const ROUND_1_CLOSE = new Date("2026-11-01T04:59:00Z").getTime();
// Sep 1, 2026 10:00 AM CDT (UTC−5)
const ROUND_1_THEME = new Date("2026-09-01T15:00:00Z").getTime();
// Jan 16, 2027 11:59 PM CST (UTC−6)
const ROUND_2_CLOSE = new Date("2027-01-16T05:59:00Z").getTime();
// Nov 15, 2026 10:00 AM CDT (UTC−5)
const ROUND_2_THEME = new Date("2026-11-15T15:00:00Z").getTime();
// Apr 3, 2027 11:59 PM CDT (UTC−5)
const ROUND_3_CLOSE = new Date("2027-04-03T04:59:00Z").getTime();
// Feb 1, 2027 10:00 AM CDT (UTC−5)
const ROUND_3_THEME = new Date("2027-02-01T15:00:00Z").getTime();
// Nov 8, 2026 12:00 PM CDT (UTC−5)
const ROUND_1_RESULTS = new Date("2026-11-08T17:00:00Z").getTime();
// Jan 24, 2027 12:00 PM CST (UTC−6)
const ROUND_2_RESULTS = new Date("2027-01-24T18:00:00Z").getTime();
// Apr 11, 2027 12:00 PM CDT (UTC−5)
const ROUND_3_RESULTS = new Date("2027-04-11T17:00:00Z").getTime();
const GRACE_PERIOD_MS = 24 * 60 * 60 * 1000;

function calcTime(diff) {
    const safeDiff = Math.max(diff, 0);
    return {
        days: Math.floor(safeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((safeDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((safeDiff / (1000 * 60)) % 60),
        seconds: Math.floor((safeDiff / 1000) % 60),
    };
}

function getCountdownState() {
    const now = Date.now();

    const phases = [
        {
            phase: "opens",
            label: "Countdown to",
            headline: "Registration",
            dateLabel: "July 1 2026",
            timeLabel: "12:00 PM CDT",
            target: REG_OPEN,
        },
        {
            phase: "registration",
            label: "Countdown to",
            headline: "Registration Closes",
            dateLabel: "Aug 31 2026",
            timeLabel: "11:59 PM CDT",
            target: REG_CLOSE,
        },
        {
            phase: "round-1-theme",
            label: "Countdown to",
            headline: "Round 1 Theme Announcement",
            dateLabel: "Sep 1 2026",
            timeLabel: "10:00 AM CDT",
            target: ROUND_1_THEME,
        },
        {
            phase: "round-1",
            label: "Countdown to",
            headline: "Round 1 End",
            dateLabel: "Oct 31 2026",
            timeLabel: "11:59 PM CDT",
            target: ROUND_1_CLOSE,
        },
        {
            phase: "round-1-grace",
            label: "Countdown to",
            headline: "Grace Period End",
            dateLabel: "Nov 1 2026",
            timeLabel: "11:59 PM CDT",
            target: ROUND_1_CLOSE + GRACE_PERIOD_MS,
        },
        {
            phase: "round-1-results",
            label: "Countdown to",
            headline: "Round 1 Results",
            dateLabel: "Nov 8 2026",
            timeLabel: "12:00 PM CDT",
            target: ROUND_1_RESULTS,
        },
        {
            phase: "round-2-theme",
            label: "Countdown to",
            headline: "Round 2 Theme Announcement",
            dateLabel: "Nov 15 2026",
            timeLabel: "10:00 AM CDT",
            target: ROUND_2_THEME,
        },
        {
            phase: "round-2",
            label: "Countdown to",
            headline: "Round 2 End",
            dateLabel: "Jan 16 2027",
            timeLabel: "11:59 PM CST",
            target: ROUND_2_CLOSE,
        },
        {
            phase: "round-2-grace",
            label: "Countdown to",
            headline: "Grace Period End",
            dateLabel: "Jan 17 2027",
            timeLabel: "11:59 PM CST",
            target: ROUND_2_CLOSE + GRACE_PERIOD_MS,
        },
        {
            phase: "round-2-results",
            label: "Countdown to",
            headline: "Round 2 Results",
            dateLabel: "Jan 24 2027",
            timeLabel: "12:00 PM CST",
            target: ROUND_2_RESULTS,
        },
        {
            phase: "round-3-theme",
            label: "Countdown to",
            headline: "Round 3 Theme Announcement",
            dateLabel: "Feb 1 2027",
            timeLabel: "10:00 AM CDT",
            target: ROUND_3_THEME,
        },
        {
            phase: "round-3",
            label: "Countdown to",
            headline: "Round 3 End",
            dateLabel: "Apr 3 2027",
            timeLabel: "11:59 PM CDT",
            target: ROUND_3_CLOSE,
        },
        {
            phase: "round-3-grace",
            label: "Countdown to",
            headline: "Grace Period End",
            dateLabel: "Apr 4 2027",
            timeLabel: "11:59 PM CDT",
            target: ROUND_3_CLOSE + GRACE_PERIOD_MS,
        },
        {
            phase: "round-3-results",
            label: "Countdown to",
            headline: "Round 3 Results",
            dateLabel: "Apr 11 2027",
            timeLabel: "12:00 PM CDT",
            target: ROUND_3_RESULTS,
        },
    ];

    const activePhase = phases.find((phase) => now < phase.target) ?? {
        phase: "complete",
        label: "",
        headline: "Thank you for participating in Replay CB!",
        dateLabel: "",
        timeLabel: "",
        target: Infinity,
    };

    return {
        ...activePhase,
        timeLeft: calcTime(activePhase.target - now),
    };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Home() {
    const imgRef = useRef(null);
    const overlayRef = useRef(null);
    const barRef = useRef(null);
    const blurbRef = useRef(null);
    const countdownRef = useRef(null);
    const [countdown, setCountdown] = useState(getCountdownState);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(
            barRef.current,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 1.2, ease: "power2.inOut" },
        )
            .to(overlayRef.current, {
                yPercent: -100,
                duration: 0.7,
                ease: "power3.inOut",
            })
            .fromTo(
                imgRef.current,
                { opacity: 0, y: 60 },
                { opacity: 1, y: 0, duration: 3, ease: "power3.out" },
                "-=0.1",
            );
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                blurbRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: blurbRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                },
            );
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                countdownRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: countdownRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                },
            );
        });
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const interval = setInterval(
            () => setCountdown(getCountdownState()),
            1000,
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* Loading overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
            >
                <p className="mb-6 text-sm font-arose tracking-widest text-white uppercase opacity-60">
                    Loading
                </p>
                <div className="w-64 h-0.5 bg-white/20 overflow-hidden rounded-full">
                    <div
                        ref={barRef}
                        className="h-full bg-white rounded-full"
                    />
                </div>
            </div>

            {/* Hero — full screen */}
            <section className="h-screen flex items-center justify-center overflow-hidden">
                <img
                    ref={imgRef}
                    src={logoImage}
                    alt="Replay CB"
                    className="w-full object-contain"
                    style={{ opacity: 0 }}
                />
            </section>

            {/* Blurb section */}
            <section className="flex flex-col items-center justify-center px-6 py-24">
                <div
                    ref={blurbRef}
                    className="flex flex-col items-center max-w-4xl"
                    style={{ opacity: 0 }}
                >
                    <h2 className="text-5xl font-arose font-bold text-main-100 mb-8">
                        About
                    </h2>
                    <p className="text-justify text-white/70 text-lg leading-8 mb-8">
                        Thank you for your interest in RE:CB! RE:CB is a
                        youtaite-based chorus battle created as a tribute to the
                        history of chorus battles within our community. Centered
                        around the theme of &ldquo;songs from other chorus
                        battles,&rdquo; participating teams will cover songs
                        that have appeared in at least one previous CB entry.
                        Through this theme, we hope to encourage participants to
                        revisit past works, discover entries, and appreciate the
                        evolution of the CB scene as a whole. This competition
                        is entirely passion-driven and is not monetized in any
                        way. We hope to see you join!
                        <br />
                        <br />
                        To help guide participants in this CB, RE:CB has
                        compiled a directory of chorus battles from across the
                        years, along with links to their official playlists. We
                        hope this serves as a helpful reference moving forward.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center mb-3">
                        <a
                            href="https://docs.google.com/spreadsheets/d/1SAJgWRMmhqKNdwoIzI2SYK0w3s5FkHHj_MAiwIJeTik/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-4xl border  bg-main-100 text-white/80 hover:text-white hover:border-white/50 transition-colors text-xl font-arose"
                        >
                            Chorus Battle Directory
                        </a>
                        <a
                            href="https://docs.google.com/spreadsheets/d/1HAhd7WZTlKBtN-F9x07I34pDkUXbCDzj0_kSA9hJHs8/edit?usp=sharing"
                            target="_blank"
                            className="px-5 py-2.5 rounded-4xl border bg-main-100 text-white/80 hover:text-white hover:border-white/50 transition-colors text-xl font-arose"
                        >
                            Group Finder
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center mb-3">
                        <a
                            href="https://docs.google.com/spreadsheets/d/18cSFoH3shVbxi0LbTrI3XvmEv4xQTKr6UNwSleLLYD0/edit?usp=sharing"
                            target="_blank"
                            className="px-5 py-2.5 rounded-4xl border text-main-100/80 bg-white/80 hover:text-main-100 hover:border-white/50 transition-colors text-xl font-arose"
                        >
                            Public Registry
                        </a>
                    </div>
                </div>
            </section>

            {/* Countdown section */}
            <section className="min-h-[70vh] flex items-center justify-center">
                <div
                    ref={countdownRef}
                    className="text-center"
                    style={{ opacity: 0 }}
                >
                    {countdown.phase !== "complete" && (
                        <p className="text-sm font-arose tracking-widest text-white/50 uppercase mb-3">
                            {countdown.label}
                        </p>
                    )}
                    <h2 className="text-3xl sm:text-5xl font-arose font-bold text-main-100 mb-4">
                        {countdown.headline}
                    </h2>
                    {countdown.phase !== "complete" && (
                        <>
                            <p className="text-5xl font-arose tracking-widest text-white uppercase mt-16 animate-pulse-red-white">
                                {countdown.dateLabel}
                            </p>
                            <p className="text-sm font-arose tracking-widest text-white/50 uppercase mb-6 mt-4">
                                {countdown.timeLabel}
                            </p>
                        </>
                    )}

                    {countdown.phase === "complete" ? null : (
                        <div className="flex gap-4 sm:gap-8 md:gap-16">
                            {[
                                {
                                    label: "Days",
                                    value: countdown.timeLeft.days,
                                },
                                {
                                    label: "Hours",
                                    value: countdown.timeLeft.hours,
                                },
                                {
                                    label: "Minutes",
                                    value: countdown.timeLeft.minutes,
                                },
                                {
                                    label: "Seconds",
                                    value: countdown.timeLeft.seconds,
                                },
                            ].map(({ label, value }) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center gap-3"
                                >
                                    <span className="text-5xl sm:text-7xl md:text-8xl font-arose font-bold text-white tabular-nums inline-block w-[2ch] text-center">
                                        {pad(value)}
                                    </span>
                                    <span className="text-xs font-arose tracking-widest text-white/50 uppercase">
                                        {label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
