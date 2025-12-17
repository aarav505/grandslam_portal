"use client"


import { useState, useMemo, useEffect } from "react"
import Navbar from '@/components/NavHome'
import { Background } from '@/components/Background'
import PlayerCard from '@/components/PlayerCard'
import Papa from 'papaparse';

let standings = {

    Juniors : [

      { house: 'Hyderabad', played: 4, points: 29 },
      { house: 'Tata', played: 4,   points: 22 },
      { house: 'Kashmir', played: 4,  points: 18 },
      { house: 'Oberoi', played: 4,   points: 12 },
      { house: 'Jaipur', played: 4,   points: 4 },
    ],

    Mediums : [

  { house: 'Hyderabad', played:10,   points: 24},
  { house: 'Tata', played: 10,  points: 18 },
  { house: 'Kashmir', played: 10,  points: 15 },
  { house: 'Oberoi', played: 10,   points: 100 },
  { house: 'Jaipur', played: 10,    points: 9 },
      ],

   Seniors : [

  { house: 'Hyderabad', played: 10,   points: 24 },
  { house: 'Tata', played: 10,    points: 18 },
  { house: 'Kashmir', played: 10,   points: 15 },
  { house: 'Oberoi', played: 10,    points: 100 },
  { house: 'Jaipur', played: 10,   points: 9 },
  ],

House : [

  { house: 'Hyderabad', played: 10, points: 24 },
  { house: 'Tata', played: 10,   points: 18 },
  { house: 'Kashmir', played: 10,    points: 15 },
  { house: 'Oberoi', played: 10,    points: 100 },
  { house: 'Jaipur', played: 10,    points: 9 },
  ]
}



let playerStats = {
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

let matches = [
  { date: '2025-12-01', teams: 'Hyderabad vs Tata', score: '150/8 - 148/9', result: 'Hyderabad won by 2 runs' },
  { date: '2025-11-28', teams: 'Kashmir vs Oberoi', score: '120/10 - 121/6', result: 'Oberoi won by 4 wickets' },
  { date: '2025-11-20', teams: 'Hyderabad vs Jaipur', score: '200/5 - 198/7', result: 'Hyderabad won by 2 runs' },
]

export default function Interhouse() {
  const [category, setCategory] = useState('Juniors')
  const categories = ['Juniors', 'Mediums', 'Seniors', 'House']

  // Bubble sort implementation (descending by points)
  function bubbleSortDescending(items) {
    const arr = items.slice();
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let swapped = false;
      for (let j = 0; j < n - 1 - i; j++) {
        const a = arr[j]?.points ?? 0;
        const b = arr[j + 1]?.points ?? 0;
        if (a < b) {
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    return arr;
  }

  // Memoize sorted standings for the selected category
  const sortedStandings = useMemo(() => {
    const list = standings[category] || [];
    return bubbleSortDescending(list);
  }, [category]);

  // house color map
  const houseColors = {
    Hyderabad: '#0b3d91', // dark blue
    Jaipur: '#16a34a', // green
    Tata: '#ef4444', // red
    Oberoi: '#60a5fa', // light blue
    Kashmir: '#FFF000' // yellow
  };

  // Simple CountUp component for animated counters
  function CountUp({ end = 0, duration = 800 }) {
    const [value, setValue] = useState(0);
    useEffect(() => {
      let start = null;
      const from = 0;
      const diff = end - from;
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setValue(Math.round(from + diff * progress));
        if (progress < 1) requestAnimationFrame(step);
      }
      const raf = requestAnimationFrame(step);
      return () => cancelAnimationFrame(raf);
    }, [end, duration]);
    return <span>{value}</span>;
  }

  const maxPoints = useMemo(() => {
    return Math.max(...(sortedStandings.map((s) => s.points) || [1]));
  }, [sortedStandings]);

  return (
    <div className="min-h-screen">
      <Background className="flex items-center justify-center py-8">
        <div className="w-full max-w-6xl px-6 relative z-100">
          <Navbar />

          
          <div className="bg-white/40 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ gridAutoRows: 'minmax(120px, auto)' }}>
            {/* House Standings (tall card on large screens) */}
            <section className=" dark:bg-slate-800 flex-col items-center justify-center rounded-3xl p-6 shadow lg:row-span-2 hover:-translate-y-1 hover:shadow-lg transition-transform">
              <h2 className="text-3xl flex  justify-center font- mb-4">House Standings</h2>

              {/* category tabs */}
              <div className="flex gap-0.5">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={`px-3  py-1 rounded-full text-sm font-semibold transition ${
                      category === c
                        ? 'bg-slate-900 text-white'
                        : 'bg- text-slate-700'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="space-y-3 mt-5 ">
                {sortedStandings.map((s, idx) => {
                  const color = houseColors[s.house] || '#94a3b8';
                  const pct = Math.round((s.points / Math.max(maxPoints, 1)) * 100);
                  const initials = s.house.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
                  return (
                  <div key={s.house} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
             
                      <div>
                        <div className="font-semibold">{s.house}</div>
                        <div className="text-sm text-slate-500">Played {s.played} </div>
                        <div className="mt-2 w-48 h-2 bg-slate-200 dark:bg-slate-700 rounded overflow-hidden">
                          <div className="h-full rounded" style={{ width: `${pct}%`, background: color, transition: 'width 700ms ease' }} />
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg"><CountUp end={s.points} duration={700} /></div>
                      <div className="text-xs text-slate-400">{pct}%</div>
                    </div>
                  </div>
                )})}
              </div>
            </section>

            {/* Player Stats (minimalist) */}
            <section className="bg-white/40 backdrop-blur-xl dark:bg-slate-800 rounded-3xl p-6 shadow hover:-translate-y-1 hover:shadow-lg transition-transform">
              <h2 className="text-3xl font flex justify-center mb-5 text-slate-900 dark:text-slate-100">Player Stats</h2>
              <div className="space-y-7">
                {/* Most Runs */}
                <div className="border-">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Runs</h3>
                  <div className="space-y-.5 ">
                    {playerStats.batting.slice(0, 3).map((p) => (
                      <div key={p.name} className="flex items-center justify-between">
                        <div className="text-l font-medium text-slate-800 dark:text-slate-200 ">{p.name}</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white"><CountUp end={p.runs} duration={600} /></div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Most Wickets */}
                <div>
                  <h3 className="text-sm font-bold  uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-3">Wickets</h3>
                  <div className="space-y-.5">
                    {playerStats.bowling.slice(0, 3).map((p) => (
                      <div key={p.name} className="flex items-center justify-between">
                        <div className="text-l font-medium text-slate-800 dark:text-slate-200 truncate">{p.name}</div>
                        <div className="text-sm font-bold text-slate-900 dark:text-white"><CountUp end={p.wickets} duration={600} /></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Match Results - Glassmorphism */}
            <section className="bg-white/40 backdrop-blur-xl dark:bg-slate-900/40  rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all border border-white/60 dark:border-slate-700/60">
              <h2 className="text-3xl font mb-5 text-slate-900 flex justify-center dark:text-slate-100">Recent Matches</h2>
              <div className="space-y-3">
                {matches.map((m) => {
                  const isWon = m.result.toLowerCase().includes('won');
                  return (
                    <div key={m.date} className="group relative overflow-hidden rounded-xl">
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content */}
                      <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/40 dark:border-slate-700/40 p-4 rounded-xl hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all">
                        <div className="flex items-center justify-between gap-4">
                          {/* Teams & Date */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">

                              <div className="font-bold text-slate-900 dark:text-slate-100 text-sm ">{m.teams}</div>
                            </div>

                          </div>

                          {/* Score Badge */}
                          <div className="flex flex-col items-end gap-1">
                            <div className="px-3 py-1.5 bg-slate-900/10 dark:bg-slate-100/10 backdrop-blur-sm rounded-lg font-mono text-xs font-bold text-slate-900 dark:text-slate-100">
                              {m.score}
                            </div>
                          </div>
                        </div>

                        {/* Result */}
                        <div className="mt-2 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-white text-xs font-semibold ${isWon ? 'bg-green-500/80' : 'bg-orange-500/80'}`}>
                            {'✓ '}
                          </span>
                          <span className="text-slate-600 dark:text-slate-400">{m.result}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="bg-white/40 backdrop-blur-xl dark:bg-slate-900/40 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all border border-white/60 dark:border-slate-700/60">
                
                <h1 className="text-xl flex justify-center mb-4">Highest Score</h1>
                <div className="flex gap-40">
                   <p className="font-medium text-gray-600">Aarav Anand</p>
                   <p className="font-bold">100*</p>
                </div>
               

            </div>
            <div className="bbg-white/40 backdrop-blur-xl dark:bg-slate-900/40  rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all border border-white/60 dark:border-slate-700/60 ">

            <h1 className="text-xl flex justify-center mb-4">Best Bowling Figure</h1>
                <div className="flex gap-40">
                   <p className="font-medium text-gray-600">Aarav Anand</p>
                   <p className="font-bold">5/12</p>
                </div>

            </div>
          </div>
        </div>
      </Background>
    </div>
  )
}
