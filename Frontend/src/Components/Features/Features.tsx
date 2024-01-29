import { Heart, SleepIcon } from "../Icons/Icons"
import Water from "./Water"
const Features = () => {
   
    return(<div className="flex flex-col md:flex-row items-center justify-center h-screen">
      
        <div className="md:hidden flex flex-row items-center mb-12 mt-28">
            <h1 className="text-sm">Hope You're having a wonderful day!</h1>
            <span><Heart /></span>
        </div>
        
        <div className="flex flex-col w-full items-center space-y-2 h-[80%]">
           

            {/* sleep */}
            <div className="flex flex-row justify-between w-10/12 md:w-7/12">
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className=" w-10/12 md:w-7/12 h-24 shadow-sharp-md ">
                <h1> 2 hrs below target</h1>
            </div>

            {/* Exercise */}
            <div className="flex flex-row justify-between w-10/12 md:w-7/12">
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className=" w-10/12 md:w-7/12 h-24 shadow-sharp-md ">
                
            </div>

            {/* Meditation */}
            <div className="flex flex-row justify-between w-10/12 md:w-7/12">
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className=" w-10/12 md:w-7/12 h-24 shadow-sharp-md ">
                
            </div>

            {/* Water */}
            <div className="flex flex-row justify-between w-10/12 md:w-7/12">
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className=" w-10/12 md:w-7/12 h-24 shadow-sharp-md ">
                
            </div>

       </div>
       
         <Water />
    
       
    </div>)
}
export default Features