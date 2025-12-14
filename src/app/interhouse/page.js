"use client"


import { useState, useMemo, useEffect } from "react"
import Navbar from '@/components/NavHome'
import { Background } from '@/components/Background'
import PlayerCard from '@/components/PlayerCard'
import Papa from 'papaparse';

let standings = {

    Juniors : [

      { house: 'Hyderabad', played: 10, won: 8, points: 24 },
      { house: 'Tata', played: 10, won: 6,  points: 18 },
      { house: 'Kashmir', played: 10, won: 5,  points: 15 },
      { house: 'Oberoi', played: 10, won: 3,  points: 100 },
      { house: 'Jaipur', played: 10, won: 3,  points: 9 },
    ],

    Mediums : [

  { house: 'Hyderabad', played: 11, won: 8, points: 24 },
  { house: 'Tata', played: 10, won: 6,  points: 18 },
  { house: 'Kashmir', played: 10, won: 5,  points: 15 },
  { house: 'Oberoi', played: 10, won: 3,  points: 100 },
  { house: 'Jaipur', played: 10, won: 3,  points: 9 },
      ],

   Seniors : [

  { house: 'Hyderabad', played: 10, won: 8, points: 24 },
  { house: 'Tata', played: 10, won: 6,  points: 18 },
  { house: 'Kashmir', played: 10, won: 5,  points: 15 },
  { house: 'Oberoi', played: 10, won: 3,  points: 100 },
  { house: 'Jaipur', played: 10, won: 3,  points: 9 },
  ],

House : [

  { house: 'Hyderabad', played: 10, won: 8, points: 24 },
  { house: 'Tata', played: 10, won: 6,  points: 18 },
  { house: 'Kashmir', played: 10, won: 5,  points: 15 },
  { house: 'Oberoi', played: 10, won: 3,  points: 100 },
  { house: 'Jaipur', played: 10, won: 3,  points: 9 },
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
  { date: '2025-11-28', teams: 'Mumbai vs Pune', score: '120/10 - 121/6', result: 'Pune won by 4 wickets' },
  { date: '2025-11-20', teams: 'Hyderabad vs Mumbai', score: '200/5 - 198/7', result: 'Hyderabad won by 2 runs' },
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
    Kashmir: '#f59e0b' // yellow
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

          <h1 className="text-4xl font-extrabold text-black mt-8 mb-6">Interhouse — Overview</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ gridAutoRows: 'minmax(120px, auto)' }}>
            {/* House Standings (tall card on large screens) */}
            <section className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow lg:row-span-2 hover:-translate-y-1 hover:shadow-lg transition-transform">
              <h2 className="text-xl font-bold mb-4">House Standings</h2>

              {/* category tabs */}
              <div className="flex gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={`px-3 py-1 rounded-md text-sm font-semibold transition ${
                      category === c
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="space-y-3 ">
                {sortedStandings.map((s, idx) => {
                  const color = houseColors[s.house] || '#94a3b8';
                  const pct = Math.round((s.points / Math.max(maxPoints, 1)) * 100);
                  const initials = s.house.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
                  return (
                  <div key={s.house} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold" style={{ background: color, color: '#fff' }}>
                        {initials}
                      </div>
                      <div>
                        <div className="font-semibold">{s.house}</div>
                        <div className="text-sm text-slate-500">Played {s.played} — Won {s.won}</div>
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

            {/* Player Stats (mini bento cards) */}
            <section className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:-translate-y-1 hover:shadow-lg transition-transform">
              <h2 className="text-xl font-bold mb-4">Top Player Stats</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-50 dark:bg-slate-700 rounded p-3">
                  <h3 className="text-sm font-semibold text-slate-600 mb-2">Most Runs</h3>
                  <div className="space-y-2">
                    {playerStats.batting.map((p) => (
                      <div key={p.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded flex items-center justify-center font-medium">R</div>
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

                <div className="bg-slate-50 dark:bg-slate-700 rounded p-3">
                  <h3 className="text-sm font-semibold text-slate-600 mb-2">Most Wickets</h3>
                  <div className="space-y-2">
                    {playerStats.bowling.map((p) => (
                      <div key={p.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded flex items-center justify-center font-medium">W</div>
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
            <section className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow hover:-translate-y-1 hover:shadow-lg transition-transform">
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
