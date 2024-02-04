import { Water2 } from "../Icons/Icons"

const Water = () =>{
    return(<div className="w-full flex justify-center" >
        <div className="hidden md:block w-10/12 h-[600px] mt-4 rounded-2xl border-2 border-black cursor-pointer">
            <div className="flex flex-col items-center">
                <div className="mt-2">
                    <Water2 />
                </div>
                <div></div>
            </div>
        </div>
    </div>)
}

export default Water