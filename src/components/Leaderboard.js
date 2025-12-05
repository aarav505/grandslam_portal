"use client"

import { useState } from "react"
import PlayerCard from "@/components/PlayerCard"

export default function Leaderboard(){

    const [category, setCategory] = useState("students")
    const [sports, setSports] = useState("Badminton")
  
    const students = {
      Badminton: [
        { rank: 1, name: "Aarav", surname: "Anand", house: "Hyderabad" },
        { rank: 2, name: "Maya", surname: "Singh", house: "Tata" },
        { rank: 3, name: "Aarav", surname: "Anand", house: "Hyderabad" }
      ],
      Squash: [
        { rank: 1, name: "Liam", surname: "Patel", house: "Mumbai" }
      ],
      Tennis: [
        { rank: 1, name: "Aarav", surname: "Anand", house: "Hyderabad" }
      ],
      "Table Tennis": [
        { rank: 1, name: "Jogn", surname: "Anand", house: "Hyderabad" }
      ]
    }
  


    const sportsList = ["Badminton", "Squash", "Table Tennis", "Tennis"]

  
    const list = category === "students" ? students : masters
    const filteredList = list[sports] || []
  
    return (
      <div className="min-h-screen ">
        {/* Content */}
        <div className="pt-32 pb-20 px-6 md:px-8">
          <div className="max-w-3xl mx-auto relative z-10">
            
            {/* Header Section */}
            <div className="text-center mb-8">
              <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-2 tracking-tight">
                Rankings
              </h1>
          
            </div>

            
            {/* Sports Filter */}
            <div className="mb-16">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-5 font-black text-center">Filter by Sport</p>
              <div className="flex gap-3 justify-center flex-wrap">
                {sportsList.map((sport) => (
                  <button
                    key={sport}
                    type="button"
                    onClick={() => setSports(sport)}
                    className={`px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wide transition-all duration-300 pointer-events-auto ${
                      sports === sport
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    {sport}
                  </button>
                ))}
              </div>
            </div>

    


            {/* Leaderboard Cards */}
            <div className="space-y-4">
              {filteredList.length > 0 ? (
                filteredList.map((p, idx) => (
                  <div key={`${category}-${p.rank}-${p.name}`} style={{animationDelay: `${idx * 100}ms`}} className="animate-fadeIn">
                    <PlayerCard
                      rank={p.rank}
                      name={p.name}
                      surname={p.surname}
                      house={category == "students" ? p.house : p.dept}
                    />
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-slate-600 text-lg font-semibold">No Rankings Yet</p>
                  <p className="text-slate-400 text-sm font-medium mt-2">Compete to claim the leaderboard</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
          }
        `}</style>
      </div>
    )
}