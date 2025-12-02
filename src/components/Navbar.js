

export default function Navbar(){

    return(
        <div className="flex py-10 px-12 justify-between bg-blue-950">
            <h3 className="text-4xl font-bold">grandslam.</h3>

            <div className="flex gap-8 text-2xl font-medium">
                <h3>Rankings</h3>
                <h3>Weekly Updates</h3>
                <h3>Schedule</h3>
            </div>
        </div>
    )
}