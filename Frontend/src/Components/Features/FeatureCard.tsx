import { useState } from "react"
import { Complete } from "../Icons/Icons"

const FeatureCard = ({title, icon, buttonIcon}) => {
    const [complete, setComplete] = useState<boolean>(false)


    return (<div className="flex flex-col items-center mb-8">
       
   
        <div className="flex justify-center rounded-lg w-9/12 md:w-9/12 h-[450px] shadow-sharp-lg 
                        over:shadow-sharp-xl shadow-transition icon-hover cursor-pointer ">
            {complete?<h1 className="flex flex-row mr-6">
                        <span><Complete/></span>Complete
                        </h1>:
                         <div className="flex flex-col items-center w-9/12 space-y-20">
                            {/* title of card */}
                            <div className="flex items-center mt-10">
                                <h1 className="mr-2">{title}</h1> 
                                {icon}
                            </div>
                            {/* Description */}
                            <h1 className=""> 2 hrs below target</h1>

                            {/* button */}
                            <button 
                                onClick={()=>setComplete(!complete)}
                                className="icon-hover3 cursor-pointer bg-black h-8 text-white px-6 rounded-md">
                                Complete
                            </button>

                     </div>}
        </div>
    </div>)
}
export default FeatureCard