import { STATS } from "../constants";
import { motion } from "framer-motion";

const Stats = () => {
    return (
        <div className="border-b border-neutral-900 py-10">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {STATS.map((stat, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 text-center backdrop-blur-sm transition-all hover:border-cyan-500/40 hover:bg-neutral-800/50"
                    >
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-4xl font-bold text-transparent">
                            {stat.value}
                        </span>
                        <span className="mt-2 text-sm font-medium text-neutral-400">
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Stats;
