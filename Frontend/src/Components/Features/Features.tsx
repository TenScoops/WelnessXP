import { Heart, SleepIcon } from "../Icons/Icons"
import Water from "./Water"
const Features = () => {
   
    return(<div className="flex flex-col md:flex-row items-center justify-center h-screen">
      
      {/* <h1>Hope You're having a wonderful day!<span><Heart /></span></h1> */}
        
        <div className="flex flex-col w-full items-center space-y-2">
           

            {/* sleep */}
            <div className="flex flex-row justify-between w-10/12">
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className=" w-10/12 h-24 shadow-sharp-md ">
                <h1> 2 hrs below target</h1>
            </div>

            {/* Exercise */}
            <div className="flex flex-row justify-between w-10/12">
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className=" w-10/12 h-24 shadow-sharp-md ">
                
            </div>

            {/* Meditation */}
            <div className="flex flex-row justify-between w-10/12">
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className=" w-10/12 h-24 shadow-sharp-md ">
                
            </div>

            {/* Water */}
            <div className="flex flex-row justify-between w-10/12">
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className=" w-10/12 h-24 shadow-sharp-md ">
                
            </div>

       </div>
       <div>
         <Water />
       </div>
       
    </div>)
}
export default Features