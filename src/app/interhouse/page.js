"use client"

import { useState, useMemo, useEffect } from "react"
import Navbar from '@/components/NavHome'
import { Background } from '@/components/Background'
import PlayerCard from '@/components/PlayerCard'
import Papa from 'papaparse';

let playerStats = {
  batting: [
    { name: 'Rushil Agrawal', runs: 0 },
    { name: 'Kaushal Golyan', runs: 0 },
    { name: 'Siddharth Kothari', runs: 0 },
  ],
  bowling: [
    { name: 'Vedant Mangal', wickets: 0 },
    { name: 'Kaushal Golyan', wickets: 0 },
    { name: 'Pratham Agarwal', wickets: 0 },
  ],
}

let matches = []

export default function Interhouse() {
  const [category, setCategory] = useState('Juniors')
  const [standings, setStandings] = useState({
    Juniors: [],
    Mediums: [],
    Seniors: [],
    House: []
  });
  const [isLoaded, setIsLoaded] = useState(false);

  const categories = ['Juniors', 'Mediums', 'Seniors', 'House']

  useEffect(() => {
    const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSSXYo5UYCk_sibPTQOSN76HOwvM_knxci5bZcaqd5SmpyTJjVIrc5XIvjQ0VvzwBSvpIkgMLIX-0wS/pub?gid=0&single=true&output=csv';

    fetch(SHEET_URL)
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          skipEmptyLines: false,
          complete: (result) => {
            const rows = result.data;
            
            const newStandings = {
              House: [],
              Seniors: [],
              Mediums: [],
              Juniors: []
            };

            // Parse House Standings (Rows 3-7, Columns 1-2)
            for (let i = 3; i <= 7; i++) {
              if (rows[i] && rows[i][1] && rows[i][1].trim()) {
                newStandings.House.push({
                  house: rows[i][1].trim(),
                  points: parseInt(rows[i][2]) || 0
                });
              }
            }

            // Parse Seniors (Rows 3-7, Columns 4-5)
            for (let i = 3; i <= 7; i++) {
              if (rows[i] && rows[i][4] && rows[i][4].trim()) {
                newStandings.Seniors.push({
                  house: rows[i][4].trim(),
                  points: parseInt(rows[i][5]) || 0
                });
              }
            }

            // Parse Mediums (Rows 11-15, Columns 1-2)
            for (let i = 11; i <= 15; i++) {
              if (rows[i] && rows[i][1] && rows[i][1].trim()) {
                newStandings.Mediums.push({
                  house: rows[i][1].trim(),
                  points: parseInt(rows[i][2]) || 0
                });
              }
            }

            // Parse Juniors (Rows 19-23, Columns 1-2)
            for (let i = 19; i <= 23; i++) {
              if (rows[i] && rows[i][1] && rows[i][1].trim()) {
                newStandings.Juniors.push({
                  house: rows[i][1].trim(),
                  points: parseInt(rows[i][2]) || 0
                });
              }
            }

            setStandings(newStandings);
            setIsLoaded(true);
          },
          error: (error) => {
            console.error('Parse error:', error);
            setIsLoaded(true);
          }
        });
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setIsLoaded(true);
      });
  }, []);

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
  }, [category, standings]);

  // house color map
  const houseColors = {
    Hyderabad: '#0b3d91',
    Jaipur: '#16a34a',
    Tata: '#ef4444',
    Oberoi: '#60a5fa',
    Kashmir: '#FFF000'
  };

  // Simple CountUp component for animated counters (only client-side)
  function CountUp({ end = 0, duration = 800 }) {
    const [value, setValue] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
      if (!mounted) return;
      
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
    }, [end, duration, mounted]);

    // Prevent hydration mismatch by showing the final value on initial render
    if (!mounted) {
      return <span>{end}</span>;
    }

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
            {/* House Standings */}
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
                {!isLoaded ? (
                  // Skeleton loader
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="animate-pulse flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 flex-1">
                          <div>
                            <div className="h-5 bg-slate-300 rounded w-24 mb-2"></div>
                            <div className="h-2 bg-slate-200 rounded w-48"></div>
                          </div>
                        </div>
                        <div className="h-6 bg-slate-300 rounded w-12"></div>
                      </div>
                    ))}
                  </div>
                ) : sortedStandings.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">No data available</div>
                ) : (
                  sortedStandings.map((s, idx) => {
                    const color = houseColors[s.house] || '#94a3b8';
                    const pct = Math.round((s.points / Math.max(maxPoints, 1)) * 100);
                    return (
                    <div key={s.house} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
               
                        <div>
                          <div className="font-semibold">{s.house}</div>
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
                  )})
                )}
              </div>
            </section>

            {/* Player Stats */}
            <section className="bg-white/40 backdrop-blur-xl dark:bg-slate-800 rounded-3xl p-6 shadow hover:-translate-y-1 hover:shadow-lg transition-transform">
              <h2 className="text-3xl font flex justify-center mb-5 text-slate-900 dark:text-slate-100">Player Stats</h2>
              <div className="space-y-7">
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

            {/* Match Results */}
            <section className="bg-white/40 backdrop-blur-xl dark:bg-slate-900/40  rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all border border-white/60 dark:border-slate-700/60">
              <h2 className="text-3xl font mb-5 text-slate-900 flex justify-center dark:text-slate-100">Recent Matches</h2>
              <div className="space-y-3">
                {matches.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">No matches yet</div>
                ) : (
                  matches.map((m) => {
                    const isWon = m.result.toLowerCase().includes('won');
                    return (
                      <div key={m.date} className="group relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-white/40 dark:border-slate-700/40 p-4 rounded-xl hover:bg-white/70 dark:hover:bg-slate-800/70 transition-all">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <div className="font-bold text-slate-900 dark:text-slate-100 text-sm ">{m.teams}</div>
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-1">
                              <div className="px-3 py-1.5 bg-slate-900/10 dark:bg-slate-100/10 backdrop-blur-sm rounded-lg font-mono text-xs font-bold text-slate-900 dark:text-slate-100">
                                {m.score}
                              </div>
                            </div>
                          </div>

                          <div className="mt-2 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
                            <span className={`inline-block px-2 py-0.5 rounded-full text-white text-xs font-semibold ${isWon ? 'bg-green-500/80' : 'bg-orange-500/80'}`}>
                              {'✓ '}
                            </span>
                            <span className="text-slate-600 dark:text-slate-400">{m.result}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </section>

            <div className="bg-white/40 backdrop-blur-xl dark:bg-slate-900/40 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all border border-white/60 dark:border-slate-700/60">
                <h1 className="text-xl flex justify-center mb-4">Highest Score</h1>
                <div className="flex justify-center">
                   <p className="font-medium text-gray-500">Coming soon...</p>
                </div>
            </div>
            
            <div className="bg-white/40 backdrop-blur-xl dark:bg-slate-900/40  rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-2xl transition-all border border-white/60 dark:border-slate-700/60 ">
              <h1 className="text-xl flex justify-center mb-4">Best Bowling Figure</h1>
                <div className="flex justify-center">
                   <p className="font-medium text-gray-500">Coming soon...</p>
                </div>
            </div>
          </div>
        </div>
      </Background>
    </div>
  )
}