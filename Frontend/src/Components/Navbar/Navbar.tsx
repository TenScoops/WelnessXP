import { Heart2, Settings } from "../Icons/Icons"

const Navbar = () => {
    return(
    <div className=" w-full fixed bg-slate-50 z-50">
       <div className=" flex flex-row justify-between items-center">
            <div className="ml-5">
                <h1>Life XP</h1>
                <div className="flex flex-row items-center">
                    <h3 className="text-xs underline mr-1">
                        Wellness
                    </h3>
                    <Heart2 />
                </div>
            </div>
            <div className="flex flex-row space-x-14 text-sm">
                <h1 className="cursor-pointer">About</h1>
                <h1 className="cursor-pointer">Features</h1>
                <h1 className="cursor-pointer">LifeXP</h1>
            </div>
            <button className="mr-5 text-sm">
                Logout
            </button>
        </div>
        {/* styling for navbar - bottom border*/}
        <div className="flex justify-center">
            <div className="border border-b border-black w-[50%]">

            </div>
        </div>
    </div>)
}

export default Navbar
