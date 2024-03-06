import { Heart2, Settings, RedirectIcon } from "../Icons/Icons"

const Navbar = () => {
    return(
    <div className="flex items-center w-full  bg-white z-50 border-b border-black h-14">
       <div className=" flex flex-row w-full justify-between items-center">
            <div className="ml-5 cursor-default">
                <h3>Daily XP</h3>
                
            </div>
            <div className="flex flex-row space-x-14 text-sm">
                <h3 className="cursor-pointer icon-hover2">About</h3>
                <h3 className="cursor-pointer icon-hover2">Features</h3>
                <div className="flex items-center space-x-1 icon-hover2 cursor-pointer">
                    <h3 className="">
                        LifeXP
                    </h3>
                    <RedirectIcon />
                </div>
            </div>
            <button className="mr-5 text-sm icon-hover2">
                Logout
            </button>
        </div>
       
    </div>)
}

export default Navbar
