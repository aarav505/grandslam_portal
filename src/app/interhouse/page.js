"use client"

import Navbar from '@/components/NavHome'
import { Background } from '@/components/Background'
import PlayerCard from '@/components/PlayerCard'

const standings = [
  { house: 'Hyderabad', played: 10, won: 8, lost: 2, points: 24 },
  { house: 'Tata', played: 10, won: 6, lost: 4, points: 18 },
  { house: 'Mumbai', played: 10, won: 5, lost: 5, points: 15 },
  { house: 'Pune', played: 10, won: 3, lost: 7, points: 9 },
]

const playerStats = {
  batting: [
    { name: 'Aarav Anand', runs: 820 },
    { name: 'Maya Singh', runs: 672 },
    { name: 'Liam Patel', runs: 610 },
  ],
  bowling: [
    { name: 'Priya Kaur', wickets: 28 },
    { name: 'Rohit Sharma', wickets: 24 },
    { name: 'Sam Lee', wickets: 20 },
  ],
}

const matches = [
  { date: '2025-12-01', teams: 'Hyderabad vs Tata', score: '150/8 - 148/9', result: 'Hyderabad won by 2 runs' },
  { date: '2025-11-28', teams: 'Mumbai vs Pune', score: '120/10 - 121/6', result: 'Pune won by 4 wickets' },
  { date: '2025-11-20', teams: 'Hyderabad vs Mumbai', score: '200/5 - 198/7', result: 'Hyderabad won by 2 runs' },
]

export default function Interhouse() {
  return (
    <div className="min-h-screen">
      <Background className="flex items-center justify-center py-8">
        <div className="w-full max-w-6xl px-6 relative z-100">
          <Navbar />

          <h1 className="text-4xl font-extrabold text-black mt-8 mb-6">Interhouse — Overview</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* House Standings */}
            <section className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <h2 className="text-xl font-bold mb-4">House Standings</h2>
              <div className="space-y-3">
                {standings.map((s, idx) => (
                  <div key={s.house} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-semibold">{s.house}</div>
                        <div className="text-sm text-slate-500">Played {s.played} — Won {s.won}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{s.points}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Player Stats */}
            <section className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <h2 className="text-xl font-bold mb-4">Top Player Stats</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-sm font-semibold text-slate-600 mb-2">Most Runs</h3>
                  <div className="space-y-2">
                    {playerStats.batting.map((p) => (
                      <div key={p.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center font-medium">R</div>
                          <div>
                            <div className="font-medium">{p.name}</div>
                            <div className="text-xs text-slate-500">Runs</div>
                          </div>
                        </div>
                        <div className="font-bold">{p.runs}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-600 mb-2">Most Wickets</h3>
                  <div className="space-y-2">
                    {playerStats.bowling.map((p) => (
                      <div key={p.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center font-medium">W</div>
                          <div>
                            <div className="font-medium">{p.name}</div>
                            <div className="text-xs text-slate-500">Wickets</div>
                          </div>
                        </div>
                        <div className="font-bold">{p.wickets}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Match Results */}
            <section className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
              <h2 className="text-xl font-bold mb-4">Recent Match Results</h2>
              <div className="space-y-4">
                {matches.map((m) => (
                  <div key={m.date} className="p-3 rounded border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{m.teams}</div>
                        <div className="text-xs text-slate-500">{m.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{m.score}</div>
                        <div className="text-sm text-slate-600">{m.result}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Background>
    </div>
  )
}
