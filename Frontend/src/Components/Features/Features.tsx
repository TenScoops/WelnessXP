import { Heart, SleepIcon, CheckMark, ExerciseIcon, WaterIcon, Complete, CheckComplete } from "../Icons/Icons"
import { RiMentalHealthFill } from "react-icons/ri";


const Features = () => {
    const styling = {
        "featurediv": "flex flex-col items-center mb-8",
        "boxdiv": "flex items-center justify-center w-10/12 md:w-10/12 h-24 shadow-sharp-lg hover:shadow-sharp-xl shadow-transition icon-hover cursor-pointer "
    }
    return(
    <div className="flex flex-col w-full items-center  border-t border-black mt-6">
      
        <div className=" flex flex-row items-center mt-14">
            <h1 className="text-normal">Hope You're having a wonderful day!</h1>
            <span><Heart /></span>
        </div>
        
        <div className="mt-8 mb-10  flex flex-row items-center cursor-pointer">
                <h1 className="mr-2">
                    Your dailies: 1/6
                </h1>
                <CheckMark />
        </div>

        <div className="w-full md:w-[85%] flex flex-col">
            {/* Features cliclable divs */}
            <div className="grid md:grid-cols-2  ">
            

                {/* sleep */}
                <div className={styling.featurediv}>
                    <div className="flex flex-row justify-between w-10/12 mb-2">
                        <div className="flex flex-row">
                            <h1 className="mr-2">Sleep</h1> 
                            <SleepIcon />
                        </div>
                        <div className="icon-hover2 cursor-pointer ">
                            <CheckComplete />
                        </div>
                    </div>
               
                    <div className={styling.boxdiv}>
                        <h1 className=""> 2 hrs below target</h1>
                    </div>
                </div>

                {/* Exercise */}
                <div className={styling.featurediv}>
                    <div className="flex flex-row justify-between w-10/12 mb-2">
                        <div className="flex flex-row items-center">
                            <h1 className="mr-2">Exercise</h1> 
                            <ExerciseIcon />
                        </div>
                        <div className="icon-hover2 cursor-pointer">
                            <CheckComplete />
                        </div>
                    </div>
               
                    <div className={styling.boxdiv}>
                        <h1>You haven't exercised today</h1>
                    </div>
                </div>
                {/* Meditation */}
                <div className={styling.featurediv}>
                   
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
                <div className={styling.featurediv}>
                  
                <div className="flex flex-row justify-between w-10/12 mb-2">
                        <div className="flex flex-row items-center">
                            <h1 className="mr-2">Exercise</h1> 
                            <ExerciseIcon />
                        </div>
                        <div className="icon-hover2 cursor-pointer">
                            <CheckComplete />
                        </div>
                    </div>
               
                    <div className={styling.boxdiv}>
                        <h1>You haven't exercised today</h1>
                    </div>
                </div>
                {/* Water */}
                <div className={styling.featurediv}>
                <div className="flex flex-row justify-between w-10/12 mb-2">
                        <div className="flex flex-row items-center">
                            <h1 className="mr-2">Exercise</h1> 
                            <ExerciseIcon />
                        </div>
                        <div className="icon-hover2 cursor-pointer">
                            <CheckComplete />
                        </div>
                    </div>
               
                    <div className={styling.boxdiv}>
                        <h1>You haven't exercised today</h1>
                    </div>
                </div>
                {/* Water */}
                <div className={styling.featurediv}>
                  
                <div className="flex flex-row justify-between w-10/12 mb-2">
                        <div className="flex flex-row items-center">
                            <h1 className="mr-2">Exercise</h1> 
                            <ExerciseIcon />
                        </div>
                        <div className="icon-hover2 cursor-pointer">
                            <CheckComplete />
                        </div>
                    </div>
               
                    <div className={styling.boxdiv}>
                        <h1>You haven't exercised today</h1>
                    </div>
                </div>

        </div>
       
        
        
    </div>
        
    </div>)
}
export default Features