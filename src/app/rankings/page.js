import Navbar from '@/components/NavHome';
import Leaderboard from '@/components/Leaderboard';
import { Background } from "@/components/Background";

export default function Rankings() {

  return(
    <div> 

      <Background className="flex items-center justify-center">

        <Navbar/>
        <Leaderboard/>

        
      </Background>
        
        
        
     
    </div>
    )
 }