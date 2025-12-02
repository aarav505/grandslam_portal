export default function PlayerCard({ rank, name, score, stats }) {
    return (
        <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-lg border border-slate-700 hover:border-slate-600 transition">
            {/* Rank */}
            <div className="w-8 text-center text-white font-bold text-lg">
                {rank}
            </div>

            {/* Player Info */}
            <div className="flex items-center gap-3 min-w-0">
                <img 
                    src="/avatar.png" 
                    alt={name} 
                    className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="min-w-0">
                    <h3 className="text-white font-semibold text-sm">{name}</h3>
                </div>
            </div>

            {/* Score Badge */}
            <div className="ml-auto bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold flex-shrink-0">
                {score}
            </div>

            {/* Stats */}
            <div className="flex gap-2 text-xs text-slate-400">
                {stats && stats.map((stat, idx) => (
                    <span key={idx} className="min-w-fit">{stat}</span>
                ))}
            </div>

            {/* Total Score */}
            <div className="text-white font-semibold text-sm flex-shrink-0 min-w-fit">
                208.50
            </div>
        </div>
    );
}