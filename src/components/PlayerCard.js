export default function PlayerCard({ rank, name, surname, house }) {
    const getMedalColor = (rank) => {
        switch(rank) {
            case 1: return "from-yellow-400 to-yellow-600"
            case 2: return "from-slate-300 to-slate-500"
            case 3: return "from-orange-400 to-orange-600"
            default: return "from-cyan-400 to-blue-600"
        }
    }

    const getMedalGlow = (rank) => {
        switch(rank) {
            case 1: return "shadow-yellow-400/40"
            case 2: return "shadow-slate-400/40"
            case 3: return "shadow-orange-400/40"
            default: return "shadow-cyan-400/40"
        }
    }

    return (
        <div className="group relative">
            {/* Gradient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Card */}
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/8 to-white/3 border border-white/20 rounded-2xl p-6 hover:border-white/40 transition-all duration-500 overflow-hidden">
                
                {/* Hover Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                <div className="relative flex items-center gap-6">
                    
                    {/* Rank Medal */}
                    <div className="flex-shrink-0 relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${getMedalColor(rank)} rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 ${getMedalGlow(rank)}`}></div>
                        <div className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${getMedalColor(rank)} rounded-xl flex items-center justify-center`}>
                            <span className="text-white font-black text-2xl md:text-3xl drop-shadow-lg">{rank}</span>
                        </div>
                    </div>

                    {/* Player Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 md:gap-3 mb-2">
                            <h3 className="text-xl md:text-2xl font-light text-white truncate">
                                {name}
                            </h3>
                            <h3 className="text-xl md:text-2xl font-semibold text-white/80 truncate">
                                {surname}
                            </h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-white/30"></div>
                            <p className="text-xs md:text-sm text-white/50 font-light uppercase tracking-widest">
                                {house}
                            </p>
                        </div>
                    </div>

                    {/* Medal Icon for Top 3 */}
                    {rank <= 3 && (
                        <div className="flex-shrink-0 text-2xl md:text-3xl animate-pulse">
                            {rank === 1 && "🥇"}
                            {rank === 2 && "🥈"}
                            {rank === 3 && "🥉"}
                        </div>
                    )}

                    {/* Arrow */}
                    <div className="flex-shrink-0 hidden md:flex">
                        <svg className="w-6 h-6 text-white/30 group-hover:text-white/60 transition-colors duration-500 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}