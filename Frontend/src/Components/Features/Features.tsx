import { Heart, SleepIcon, CheckMark, ExerciseIcon, WaterIcon, Complete } from "../Icons/Icons"
import { RiMentalHealthFill } from "react-icons/ri";
import Water from "./Water"
const Features = () => {
    const styling = {
        "headingdiv": "flex flex-col row justify-between space-y-2",
        "boxdiv": "flex items-center justify-center w-10/12 md:w-10/12 h-24 shadow-sharp-md icon-hover cursor-pointer "
    }
    return(
    <div className="flex flex-col items-center h-screen w-full">
      
        {/* <div className="md:hidden flex flex-row items-center mb-12 mt-28">
            <h1 className="text-sm">Hope You're having a wonderful day!</h1>
            <span><Heart /></span>
        </div> */}
        

        <div className="grid md:grid-cols-2  w-[85%] lg:w-[80%] xl:w-[75%] mt-20">
            {/* Features cliclable divs */}
            <div className="flex flex-col w-full  space-y-6 ">
            

                {/* sleep */}
                <div className={styling.headingdiv}>
                    <div className="flex flex-row">
                        <h1 className="mr-2">Sleep</h1> 
                        <SleepIcon />
                    </div>
                   
               
                    <div className={styling.boxdiv}>
                        <h1 className=""> 2 hrs below target</h1>
                    </div>
                </div>

                {/* Exercise */}
                <div className={styling.headingdiv}>
                    <div className="flex flex-row items-center">
                        <h1 className="mr-2">Exercise</h1> 
                        <ExerciseIcon />
                    </div>
                    
               
                    <div className={styling.boxdiv}>
                        <h1>You haven't exercised today</h1>
                    </div>
                </div>
                {/* Meditation */}
                <div className={styling.headingdiv}>
                   
                    <div className="flex flex-row items-center">
                        <h1 className="mr-2">Meditation</h1> 
                        <RiMentalHealthFill size={25}/>
                    </div>
                   
                   
                    <div className={styling.boxdiv}>
                        <Complete />
                        <h1>Complete!</h1>
                    </div>
                </div>

                {/* Water */}
                <div className={styling.headingdiv}>
                  
                    <div className="flex flex-row items-center">
                        <h1 className="mr-2">Water</h1> 
                        <WaterIcon />
                    </div>
                
                    <div className={styling.boxdiv}>
                        <h1>1 liter remaining</h1>
                    </div>
                </div>

        </div>
       
        {/* Features configurations */}

        <Water />

        
    </div>
        <div className="mt-14 absolute bottom-0 right-10 mb-4 flex flex-row items-center cursor-pointer">
                <h1 className="mr-2">
                    1/4 Complete
                </h1>
                <CheckMark />
        </div>
    </div>)
}
export default Features