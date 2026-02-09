import { useState, useEffect } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return {
            hours: date.getHours().toString().padStart(2, '0'),
            minutes: date.getMinutes().toString().padStart(2, '0'),
            seconds: date.getSeconds().toString().padStart(2, '0')
        };
    };

    const { hours, minutes, seconds } = formatTime(time);

    if (!mounted) return null;

    return (
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 shadow-sm backdrop-blur-md hover:bg-white/10 transition-colors">
            {/* Hours */}
            <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white font-mono leading-none">
                    {hours}
                </span>
                <span className="text-[8px] text-gray-400 uppercase tracking-wider">Hrs</span>
            </div>

            <span className="text-sm font-bold text-gray-400 -mt-1">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-white font-mono leading-none">
                    {minutes}
                </span>
                <span className="text-[8px] text-gray-400 uppercase tracking-wider">Min</span>
            </div>

            <span className="text-sm font-bold text-gray-400 -mt-1">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
                <span className="text-lg font-bold text-primary-400 font-mono leading-none">
                    {seconds}
                </span>
                <span className="text-[8px] text-primary-300 uppercase tracking-wider">Sec</span>
            </div>
        </div>
    );
};

export default DigitalClock;
