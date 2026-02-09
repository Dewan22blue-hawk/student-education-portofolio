import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState("Initializing...");

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + 1;

                // Update status text based on progress
                if (newProgress < 30) setStatus("Initializing metrics...");
                else if (newProgress < 60) setStatus("Loading assets...");
                else if (newProgress < 90) setStatus("Preparing interface...");
                else setStatus("Welcome");

                if (newProgress >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Slight delay before exit
                    return 100;
                }
                return newProgress;
            });
        }, 20); // 20ms * 100 = 2000ms total load time

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 text-white"
            initial={{ y: 0 }}
            exit={{
                y: "-100vh",
                transition: {
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1], // Custom cubic-bezier for smooth "swipe" feel
                    delay: 0.2
                }
            }}
        >
            <div className="w-full max-w-md px-6">
                <div className="flex justify-between items-end mb-2">
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                        Denny Irawan
                    </h1>
                    <span className="text-4xl md:text-6xl font-light tabular-nums">
                        {progress}%
                    </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-[2px] bg-gray-800 rounded-full overflow-hidden mb-4">
                    <motion.div
                        className="h-full bg-primary-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    />
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>{status}</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
