"use client"

import { useState } from "react"
import PlayerCard from "@/components/PlayerCard"

export default function Leaderboard(){

    
      const [category, setCategory] = useState("students")
    
      
      const students = [
        { rank: 1, name: "Aarav", surname: "Anand", house: "Hyderabad" },
        { rank: 2, name: "Maya", surname: "Singh", house: "Tata" },
        { rank: 3, name: "Liam", surname: "Patel", house: "Mumbai" },
        { rank: 4, name: "Aarav", surname: "Anand", house: "Hyderabad" },
        { rank: 5, name: "Aarav", surname: "Anand", house: "Hyderabad" },
        { rank: 6, name: "Aarav", surname: "Anand", house: "Hyderabad" }
        
      ]
    
      const masters = [
        { rank: 1, name: "Priya", surname: "Kaur", dept: "English" },
        { rank: 2, name: "Rohit", surname: "Sharma", dept: "Math" },
      ]
    
      const list = category === "students" ? students : masters
    
      return (
        <div className="px-[2vh] min-h-screen flex flex-col pb-[5vh] pt-[3vh]">
          {/* Toggle */}
          
    
          <h2 className="text-white flex justify-center text-[2.9rem] mb-4">
            {category === "students" ? "Students Leaderboard" : "Masters Leaderboard"}
          </h2>
    
          {/* Leaderboard list */}
          {list.map((p) => (
            <PlayerCard
              key={`${category}-${p.rank}-${p.name}`}
              rank={p.rank}
              name={p.name}
              surname={p.surname}
              house={category=="students" ? p.house : p.dept}
            />
          ))}
    
          <div className="fixed bottom-0 left-0 w-full flex gap-4 justify-center items-center py-4 z-50">
    
            <button
              onClick={() => setCategory("students")}
              className={
                (category === "students"
                  ? "bg-blue-600 text-white"
                  : "bg-transparent border border-slate-700 text-white") +
                " px-4 py-2 rounded-full text-[1.9rem]"
              }
            >
              Students
            </button>
    
            <button
              onClick={() => setCategory("masters")}
              className={
                (category === "masters"
                  ? "bg-blue-600 text-white"
                  : "bg-transparent border border-slate-700 text-white") +
                " px-4 py-2 rounded-full text-[1.9rem]"
              }
            >
              Masters
            </button>
    
          </div>
        </div>
    )

}