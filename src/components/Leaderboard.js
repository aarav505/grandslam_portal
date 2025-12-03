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
        { rank: 3, name: "Liam", surname: "Patel", house: "Mumbai" }
      ],
      Tennis: [
        { rank: 4, name: "Aarav", surname: "Anand", house: "Hyderabad" }
      ],
      "Table Tennis": [
        { rank: 5, name: "Aarav", surname: "Anand", house: "Hyderabad" }
      ]
    }
  
    const masters = {
      Badminton: [
        { rank: 1, name: "Priya", surname: "Kaur", dept: "English" }
      ],
      Tennis: [
        { rank: 2, name: "Rohit", surname: "Sharma", dept: "Math" }
      ],
      Squash: [],
      "Table Tennis": []
    }

    const sportsList = ["Badminton", "Squash", "Table Tennis", "Tennis"]
  
    const list = category === "students" ? students : masters
    const filteredList = list[sports] || []
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/3 -left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 pt-32 pb-32 px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-full px-6 py-2">
                  <p className="text-sm font-light text-white/70 uppercase tracking-widest">
                    📊 Leaderboard
                  </p>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-light text-white mb-3 tracking-tight">
                Grandslam
              </h1>
              <p className="text-lg md:text-xl text-white/50 font-light tracking-wide">
                {category === "students" ? "Student Rankings" : "Master Rankings"}
              </p>
            </div>

    

            {/* Category Toggle */}
            <div className="flex gap-4 justify-center mb-16">
              {["students", "masters"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`relative group px-8 py-3 rounded-full font-light text-sm md:text-base uppercase tracking-wider transition-all duration-500 ${
                    category === cat
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 border border-white/40"
                      : "bg-white/5 text-white/70 border border-white/15 hover:bg-white/10 hover:border-white/25"
                  }`}
                >
                  <span className="relative flex items-center gap-2">
                    {cat === "students" ? "👥 Students" : "🎓 Masters"}
                  </span>
                </button>
              ))}
            </div>

            {/* Sports Filter - Modern Pill Design */}
            <div className="mb-16">
              <p className="text-xs text-white/40 uppercase tracking-widest mb-4 ml-1">Filter by Sport</p>
              <div className="flex gap-2 justify-center flex-wrap">
                {sportsList.map((sport) => (
                  <button
                    key={sport}
                    onClick={() => setSports(sport)}
                    className={`relative group px-4 md:px-6 py-2 rounded-full font-light text-xs md:text-sm uppercase tracking-wide transition-all duration-400 backdrop-blur-lg border ${
                      sports === sport
                        ? "bg-gradient-to-r from-cyan-500/50 to-blue-600/50 text-white border-white/50 shadow-lg shadow-cyan-500/25 scale-105"
                        : "bg-white/5 text-white/60 border-white/15 hover:bg-white/10 hover:border-white/30 hover:text-white/80"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {sports === sport && (
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                      {sport}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Leaderboard Cards */}
            <div className="space-y-3 md:space-y-4">
              {filteredList.length > 0 ? (
                filteredList.map((p, idx) => (
                  <div key={`${category}-${p.rank}-${p.name}`} style={{animationDelay: `${idx * 80}ms`}} className="animate-fadeIn">
                    <PlayerCard
                      rank={p.rank}
                      name={p.name}
                      surname={p.surname}
                      house={category == "students" ? p.house : p.dept}
                    />
                  </div>
                ))
              ) : (
                <div className="backdrop-blur-2xl bg-gradient-to-br from-white/8 to-white/3 border border-white/20 rounded-2xl p-12 text-center">
                  <div className="text-5xl mb-4">🏆</div>
                  <p className="text-white/60 text-lg font-light mb-2">No Rankings Yet</p>
                  <p className="text-white/40 text-sm font-light">Compete to claim the leaderboard</p>
                </div>
              )}
            </div>


          </div>
        </div>

        {/* Add this to your tailwind.config.js for the fade animation */}
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