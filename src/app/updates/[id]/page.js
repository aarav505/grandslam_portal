import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/NavHome"
import { Background } from "@/components/Background"

const updates = [
  {
    id: 1,
    title: "Season Kickoff — Key Matches Announced",
    date: "Dec 05, 2025",
    excerpt: "The league opens next week. Fixtures released and star players confirmed.",
    image: "/_F1A2109.jpg",
    content: "The cricket season is officially underway with exciting matches scheduled across all formats. Teams have announced their squads and key players are ready to compete. Full fixtures and broadcast timings are now available on the official website."
  },
  {
    id: 2,
    title: "Player Spotlight — Aarav Anand",
    date: "Dec 03, 2025",
    excerpt: "Aarav returns this season with improved form.",
    image: "/_F1A1957.jpg",
    content: "Star player Aarav Anand makes his return to the season with exceptional form. His training regime focuses on fitness and technique. Coaches are optimistic about his performance and expect him to be a key player this season."
  },
  {
    id: 3,
    title: "Injury Report & Recovery Timelines",
    date: "Dec 01, 2025",
    excerpt: "Latest medical updates on players and expected return dates.",
    image: "/_F1A1708.jpg",
    content: "Several players are recovering from injuries sustained in previous matches. Medical teams are working closely with players to ensure safe returns. Expected recovery timelines range from 2-4 weeks depending on injury severity."
  },
]

export async function generateStaticParams() {
  return updates.map((update) => ({
    id: update.id.toString(),
  }))
}

export default async function UpdateArticlePage({ params }) {
  const resolvedParams = await params
  const id = parseInt(resolvedParams.id, 10)
  const article = updates.find(u => u.id === id)

  if (!article) {
    return (
      <Background>
        <Navbar />
        <main className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 pt-24 pb-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Article Not Found</h1>
          <Link href="/updates" className="text-slate-600 hover:text-slate-900 mt-4 inline-block">
            ← Back to updates
          </Link>
        </main>
      </Background>
    )
  }

  return (
    <Background>
      <Navbar />

      <main className="relative z-10 max-w-3xl mx-auto px-6 md:px-8 pt-24 pb-20">
        <article>
          <header className="mb-8">
            <time className="text-sm text-slate-400 uppercase tracking-wide">
              {article.date}
            </time>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              {article.title}
            </h1>
          </header>

          <div className="rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <section className="text-base text-slate-700 leading-relaxed space-y-4">
            <p>{article.content}</p>
          </section>

          <footer className="mt-12 pt-6 border-t border-slate-200">
            <Link href="/updates" className="text-slate-600 hover:text-slate-900 font-medium">
              ← Back to updates
            </Link>
          </footer>
        </article>
      </main>
    </Background>
  )
}