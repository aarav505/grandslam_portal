import { Background } from "@/components/Background";
import Navbar from '@/components/NavHome';
import { RollingText } from "@/components/Rolling-Text";

export default function Updates() {
  return (
    <div className="min-h-screen flex flex-col">
      <Background>
        <Navbar />

        <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-8 pt-20 pb-20">
          
          {/* Content Container */}
          <div className="w-full max-w-2xl">
            
            {/* Heading */}
            <div className="mb-12">
              <h1 className="text-2xl flex flex-col items-center justify-center md:text-5xl font-black text-black-800 mb-2">
                <RollingText 
                  text="Cricket Season Updates"
                  inView={true}
                  transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
                />
              </h1>
             
            </div>

            {/* Image Container */}
            <div className="rounded-2xl h-[70%] flex flex-col items-center justify-center overflow-hidden shadow-lg border z-20 relative ">
              <img 
                src="/updates.jpg" 
                alt="Updates Page Placeholder" 
                className="w-auto h-auto object-cover"
              />
            </div>

            <div className="flex flex-col items-center justify-center mt-8">

                <h2>19/11/22</h2>

            </div>

          </div>
        </div>

      </Background>
    </div>
  );
}