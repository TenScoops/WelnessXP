import { useState } from "react"
import { Complete } from "../Icons/Icons"

const FeatureCard = ({title, icon, buttonIcon}) => {
    const [complete, setComplete] = useState<boolean>(false)
    const styling = {
        "featurediv": "flex flex-col items-center mb-8",
        "boxdiv": "flex items-center justify-center w-10/12 md:w-10/12 h-24 shadow-sharp-lg hover:shadow-sharp-xl shadow-transition icon-hover cursor-pointer "
    }

    return (<div className={styling.featurediv}>
        <div className="flex flex-row justify-between w-10/12 mb-2">
            <div className="flex flex-row items-center">
                <h1 className="mr-2">{title}</h1> 
                {icon}
            </div>
            <button 
                onClick={()=>setComplete(!complete)}
                className="icon-hover2 cursor-pointer ">
                {buttonIcon}
            </button>
        </div>
   
        <div className={styling.boxdiv}>
            {complete?<h1 className="flex flex-row items-center mr-6">
                        <span><Complete/></span>Complete
                        </h1>:
                        <h1 className=""> 2 hrs below target</h1>}
        </div>
    </div>)
}
export default FeatureCard