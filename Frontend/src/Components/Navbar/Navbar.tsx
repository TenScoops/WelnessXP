import { Settings } from "../Icons/Icons"

const Navbar = () => {
    return(<div className=" w-full fixed z-50">
       <div className=" flex flex-row justify-between">
            <div>
                <h1>Life XP</h1>
                <h3 className="text-xs underline">Wellness</h3>
            </div>

            <button>
                <Settings />
            </button>
        </div>
    </div>)
}

export default Navbar
