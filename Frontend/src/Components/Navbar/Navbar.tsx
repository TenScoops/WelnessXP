import { Heart2, Settings } from "../Icons/Icons"

const Navbar = () => {
    return(<div className=" w-full fixed z-50">
       <div className=" flex flex-row justify-between">
            <div className="ml-5">
                <h1>Life XP</h1>
                <div className="flex flex-row items-center">
                    <h3 className="text-xs underline mr-1">
                        Wellness
                    </h3>
                    <Heart2 />
                </div>
            </div>

            <button className="mr-5">
                <Settings />
            </button>
        </div>
    </div>)
}

export default Navbar
