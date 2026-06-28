/**
 * Reusable staff showcase.
 *
 * <JudgeCategory category={{ name, members: [judge, judge] }} />
 *
 * Each `judge` is { name, image, twitter?, youtube? }.
 * A category always holds a pair of judges, laid out side by side.
 */

function XIcon() {
    return (
        <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}

function YouTubeIcon() {
    return (
        <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
    );
}

function SocialLink({ href, label, children }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white/70 hover:text-[#a60000] transition-colors duration-200"
        >
            {children}
        </a>
    );
}

function JudgeCard({ member }) {
    return (
        <div className="group flex flex-col items-center text-center">
            <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 group-hover:ring-[#a60000]/60">
                <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <h3 className="mt-4 font-arose text-3xl sm:text-4xl text-white">
                {member.name}
            </h3>

            {(member.twitter || member.youtube) && (
                <div className="mt-2 flex items-center gap-4">
                    {member.twitter && (
                        <SocialLink
                            href={member.twitter}
                            label={`${member.name} on X / Twitter`}
                        >
                            <XIcon />
                        </SocialLink>
                    )}
                    {member.youtube && (
                        <SocialLink
                            href={member.youtube}
                            label={`${member.name} on YouTube`}
                        >
                            <YouTubeIcon />
                        </SocialLink>
                    )}
                </div>
            )}
        </div>
    );
}

export default function JudgeCategory({ category }) {
    return (
        <section>
            {/* Category heading with ornamental rule */}
            <div className="mb-8 flex items-center gap-4">
                <span className="font-arose text-2xl sm:text-3xl tracking-[0.15em] uppercase text-[#a60000] whitespace-nowrap">
                    {category.name}
                </span>
                <span className="h-px flex-1 bg-[#a60000]/30" />
            </div>

            {/* Paired judges */}
            <div className="grid grid-cols-2 gap-6 sm:gap-10">
                {category.members.map((member) => (
                    <JudgeCard key={member.name} member={member} />
                ))}
            </div>
        </section>
    );
}
