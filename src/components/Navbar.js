export default function Navbar(){

    return(
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
            <div className="flex py-4 px-8 md:px-16 justify-between items-center max-w-7xl mx-auto w-full">
                {/* Logo */}
                <div className="flex items-center gap-2">
                   
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                        grand<span className="">slam</span>
                    </h3>
                </div>

                {/* Navigation */}
                <div className="hidden md:flex gap-12 text-sm font-light tracking-wide">
                    <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Rankings</a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Weekly Updates</a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors duration-300">Schedule</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden w-10 h-10 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}