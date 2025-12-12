'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Background } from "@/components/Background"
import Navbar from "@/components/NavHome"
import { RollingText } from "@/components/Rolling-Text"
import { LiquidButton } from "@/components/Button"

// Move data directly into the client component
const updates = [
  {
    id: 1,
    title: "Season Kickoff — Key Matches Announced",
    date: "Dec 05, 2025",
    excerpt: "Ishwar Sandhi.",
    image: "/_F1A2109.jpg",
  },
  {
    id: 2,
    title: "Player Spotlight — Aarav Anand",
    date: "Dec 03, 2025",
    excerpt: "Aarav returns this season with improved form.",
    image: "/_F1A1957.jpg",
  },
  {
    id: 3,
    title: "Injury Report & Recovery Timelines",
    date: "Dec 01, 2025",
    excerpt: "Latest medical updates on players and expected return dates.",
    image: "/_F1A1708.jpg",
  },
]

export default function Updates() {
  return (
    <Background>
      <Navbar />

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 mt-20 py-20">
        {/* Hero */}
        <section className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            <RollingText
              text="Grandslam Articles"
              inView={true}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
            />
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Latest news, match reports and player updates.
          </p>
        </section>

        {/* Updates grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {updates.map((u) => (
            <article
              key={u.id}
              className="group relative bg-white/80 border border-slate-100 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-44 md:h-auto md:w-44 flex-shrink-0">
                <Image
                  src={u.image}
                  alt={u.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 176px"
                  className="object-cover"
                />
              </div>

              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <time className="text-xs text-slate-400 uppercase tracking-wide">
                      {u.date}
                    </time>
                  </div>

                  <h3 className="mt-2 text-lg md:text-xl font-semibold text-slate-900">
                    {u.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">
                    {u.excerpt}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500">Read time</span>
                    <span className="text-xs text-slate-400">• 3 min</span>
                  </div>

                  <Link href={`/articles/${u.id}`} className="inline-block">
                    <LiquidButton
                      size="sm"
                      className="bg-transparent border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white"
                    >
                      Read
                    </LiquidButton>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* large hero image / gallery */}
        <section className="mt-12">
          <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <Image
              src="/_F1A2109.jpg"
              alt="Season highlights"
              width={1600}
              height={480}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </main>
    </Background>
  )
}