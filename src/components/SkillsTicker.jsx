import { motion } from 'framer-motion';

/**
 * SkillsTicker - Horizontally auto-scrolling tech stack display with React Icons
 * Infinite loop animation with gradient fade edges
 */
const SkillsTicker = ({ skills }) => {
    // Triple the skills for seamless infinite scroll
    const tripleSkills = [...skills, ...skills, ...skills];

    return (
        <div className="py-12 border-y border-gray-200/30 dark:border-white/5 bg-gray-100/50 dark:bg-slate-950/30 overflow-hidden relative">
            {/* Left gradient fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />

            {/* Right gradient fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />

            {/* Scrolling content */}
            <div className="flex gap-12 animate-scroll-infinite w-max px-6">
                {tripleSkills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={i}
                            className="flex items-center gap-3 text-gray-700 dark:text-slate-400 font-medium group cursor-default whitespace-nowrap"
                        >
                            <Icon
                                className="text-3xl transition-colors duration-300"
                                style={{
                                    color: skill.color,
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                }}
                            />
                            <span className="text-lg group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                                {skill.name}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillsTicker;
