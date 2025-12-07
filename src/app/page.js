"use client"


import Navbar  from "@/components/NavHome"
import { Background } from "@/components/Background";
import { RollingText } from "@/components/Rolling-Text";
import CircularText from "@/components/Circular";
import TypingText from "@/components/Type";
import { LiquidButton } from '@/components/Button';






export default function Home() {



  return(
    <div className="h-screen overflow-hidden">
      <Background className="flex items-center justify-center">

        <Navbar/>
      <div className="flex w-full h-full flex-col items-center gap-3 h-full justify-center">

        <h1 className="text-[6.9rem]"> 
          <RollingText 
            text="Everything Sports"
            inView={true}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }
          }className="font-medium"
          />
        </h1>
        
        <h3 className="text-[1.5rem]"> 
          <RollingText 
            text="ALL AT ONCE"
            inView={true}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }
          }className="font-medium text-gray-500"
          />
        </h3>
       

       
        
        
        
        
      </div>



      </Background>
      {/* fixed circular element at viewport bottom-left */}
      <div className="fixed bottom-12 left-12 z-50 pointer-events-auto">
        <CircularText
          text="THE • GRANDSLAM • "
          onHover="speedUp"
          spinDuration={15}
          size={120}
          className="text-primary"
        />
      </div>
    </div>
  )
   
}