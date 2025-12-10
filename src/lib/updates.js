export const updates = [
  {
    id: 1,
    slug: 'season-kickoff',
    title: "Season Kickoff — Key Matches Announced",
    date: "Dec 05, 2025",
    excerpt:
      "The league opens next week. Fixtures released and star players confirmed. Read the full schedule and broadcast timings.",
    image: "/_F1A2109.jpg",
    content: "Full article content for Season Kickoff — add the detailed HTML/markdown or text here."
  },
  {
    id: 2,
    slug: 'player-spotlight-aarav-anand',
    title: "Player Spotlight — Aarav Anand",
    date: "Dec 03, 2025",
    excerpt:
      "Aarav returns this season with improved form. We look at his training regime and expected performance.",
    image: "/_F1A1957.jpg",
    content: "Full article content for Player Spotlight — add the detailed HTML/markdown or text here."
  },
  {
    id: 3,
    slug: 'injury-report',
    title: "Injury Report & Recovery Timelines",
    date: "Dec 01, 2025",
    excerpt:
      "Latest medical updates on players and expected return dates. Teams are adjusting lineups accordingly.",
    image: "/_F1A1708.jpg",
    content: "Full article content for Injury Report — add the detailed HTML/markdown or text here."
  },
]

export function getUpdateById(id) {
  return updates.find(u => Number(u.id) === Number(id)) || null
}

export function getAllUpdates() {
  return updates
}