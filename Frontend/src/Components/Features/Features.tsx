import { Heart, SleepIcon, CheckMark } from "../Icons/Icons"
import Water from "./Water"
const Features = () => {
    const styling = {
        "headingdiv": "flex flex-row justify-between w-10/12 md:w-10/12",
        "boxdiv": "w-10/12 md:w-10/12 h-28 shadow-sharp-md icon-hover cursor-pointer "
    }
    return(<div className="flex flex-col items-center h-screen w-full">
      
        {/* <div className="md:hidden flex flex-row items-center mb-12 mt-28">
            <h1 className="text-sm">Hope You're having a wonderful day!</h1>
            <span><Heart /></span>
        </div> */}
        <div className="mt-16 mb-5 flex flex-row items-center cursor-pointer">
            <h1 className="mr-2">
                1/4 Complete
            </h1>
            <CheckMark />
        </div>

        <div className="flex flex-row w-full">
        {/* Features cliclable divs */}
        <div className="flex flex-col w-full items-center  space-y-2 ">
           

            {/* sleep */}
            <div className={styling.headingdiv}>
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className={styling.boxdiv}>
                <h1> 2 hrs below target</h1>
            </div>

            {/* Exercise */}
            <div className={styling.headingdiv}>
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className={styling.boxdiv}>
                
            </div>

            {/* Meditation */}
            <div className={styling.headingdiv}>
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className={styling.boxdiv}>
                
            </div>

            {/* Water */}
            <div className={styling.headingdiv}>
                <div className="flex flex-row">
                    <h1 className="mr-2">Sleep</h1> 
                    <SleepIcon />
                </div>
                {/* invisible div for styling */}
                <div></div>
            </div>
            <div className={styling.boxdiv}>
                
            </div>

       </div>
       
        {/* Features configurations */}
        <Water />
    </div>
       
    </div>)
}
export default Features