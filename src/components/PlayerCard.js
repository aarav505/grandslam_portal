export default function PlayerCard({ rank, name, surname, house }) {
    const getMedalColor = (rank) => {
        switch(rank) {
            case 1: return "bg-amber-400"
            case 2: return "bg-slate-300"
            case 3: return "bg-orange-400"
            default: return "bg-slate-200"
        }
    }

    return (
        <div className="group relative">
            {/* Card */}
            <div className="relative bg-white border border-slate-100 rounded-2xl w-200 overflow-hidden hover:border-slate-200 hover:shadow-md transition-all duration-400 flex h-24 md:h-28">
                
                {/* Left Content Section */}
                <div className="flex-1 flex items-center gap-4 md:gap-5 px-5 md:px-6 py-4 md:py-5 z-10">
                    
                    {/* Rank Medal */}
                    <div className="flex-shrink-0">
                        <div className={`${getMedalColor(rank)} w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center shadow-md`}>
                            <span className="text-white font-black text-lg md:text-xl">{rank}</span>
                        </div>
                    </div>

                    {/* Player Info */}
                    <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1">
                            <h3 className="text-base md:text-lg font-black text-slate-900 truncate">
                                {name}
                            </h3>
                            <h3 className="text-base md:text-lg font-medium text-slate-600 truncate">
                                {surname}
                            </h3>
                        </div>
                        <p className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider">
                            {house}
                        </p>
                    </div>
                </div>

                {/* Right Image Section - Full Height */}
                <div className="flex-shrink-0 w-24 md:w-28 h-full rounded-r-2xl overflow-hidden">
                    <img 
                        src="/test.avif" 
                        alt={`${name} ${surname}`}
                        className="w-full h-full object-cover"
                    />
                </div>

            
            </div>
        </div>
    );
}