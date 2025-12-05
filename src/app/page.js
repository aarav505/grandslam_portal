"use client"


import Navbar  from "@/components/NavHome"
import { Background } from "@/components/Background";
import { RollingText } from "@/components/Rolling-Text";
import CircularText from "@/components/Circular";
import TypingText from "@/components/Type";






export default function Home() {



  return(
    <div className="h-screen overflow-hidden">
      <Background className="flex items-center justify-center">

        <Navbar/>
      <div className="flex w-full h-full flex-col items-center gap-3 h-full justify-center">

        <h1 className="text-[6.9rem] text-black"> 
          <RollingText 
            text="Everything Sports"
            inView={true}
            transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
          />
        </h1>

        <TypingText
          text={["Stay Updated", "Never Miss An Update", "24 X 7"]}
          typingSpeed={70}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          className="text-xl text-gray-800 mt-"
          textColors={['#06b6d4', '#06b6d4', '#06b6d4']}
          variableSpeed={{ min: 50, max: 120 }}
        />
        
        
        
        
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