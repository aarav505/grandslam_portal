export default function Navbar(){

    return(
        <div className="fixed top-0 left-0 w-full z-100 bg-none ">
            <div className="flex py-4 px-6 md:px-12 justify-between items-center max-w-7xl mx-auto w-full">
                {/* Logo */}
                <div className="flex items-center gap-3 group cursor-pointer">
                    
                    <div className="flex flex-col">
                        <h3 className="text-3xl  tracking-tight text-slate-900 leading-none">
                          <a href="/"><span className="font-medium">grand</span><span className="font-light">slam</span></a>
                            
                        </h3>
                        
                    </div>
                </div>

                {/* Navigation - Desktop */}
                <div className="hidden md:flex gap-10 text-sm font-medium">
                    <a href="rankings" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 relative group">
                        Rankings
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="articles" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 relative group">
                        Articles
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="interhouse" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 relative group">
                        Inter-House
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="https://www.dsfl.app" target="_blank" className="text-slate-600 hover:text-slate-900 transition-colors duration-300 relative group">
                        DSFL
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-900 group-hover:w-full transition-all duration-300"></span>
                    </a>
                </div>

            </div>
        </div>
    )
}