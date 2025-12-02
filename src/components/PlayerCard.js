

export default function PlayerCard({ rank, name, surname, house }) {
    return (
        <div className="flex items-center gap-5 bg-slate-800 px-12 rounded-lg border border-slate-700 hover:border-slate-600 transition mb-10">
            {/* Rank */}
            <div className="w-8 text-center text-white font-bold text-[3rem]">
                {rank}.
            </div>

            {/* Player Info */}
            <div className="flex items-center gap-3 ml-[2.1rem]">
                <img 
                    src="/test.avif" 
                    alt={name} 
                    className="w-[15vh] h-[15vh] "
                />
                <div className="flex gap-[1.45rem] ml-20">
                    <h3 className="text-white  text-[3.0rem]">{name}</h3>
                    <h3 className="text-white font-semibold text-[3.0rem]">{surname}</h3>
                </div>
            </div>

            {/*House*/}
             <div className="flex items-center gap-3 ml-auto">
                <h3 className="text-[2.1rem]">{house}</h3>
            </div>


        
        </div>
    );
}