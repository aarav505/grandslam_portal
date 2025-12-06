import Navbar from '@/components/NavHome';
import Leaderboard from '@/components/Leaderboard';
import { Background } from "@/components/Background";

export default function Rankings() {
  return(
    <Background>
      <Navbar />
      <Leaderboard />
    </Background>
  )
}