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
    title: "The Grandslam",
    date: "Dec 05, 2025",
    excerpt: "Ayaan Adeeb",
    image: "/articles/jaipur.jpg",
  },
  {
    id:2,
    title: "Beyond Two Wheels and a Carbon Skeleton",
    date: "Dec 03, 2025",
    excerpt: "Loechin Phangcho",
    image: "/articles/cycling.jpg",
  },
  {
    id: 3,
    title: "FIFA WORLD CUP - 2026",
    date: "Dec 01, 2025",
    excerpt: "Ranveer Tomar",
    image: "/articles/world.jpg",
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

      </main>
    </Background>
  )
}