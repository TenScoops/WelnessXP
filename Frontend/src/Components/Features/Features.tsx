import { CheckComplete, CheckMark, ExerciseIcon, MeditateIcon, SleepIcon, WaterIcon } from "../Icons/Icons";
import FeatureCard from "./FeatureCard";


const Features = () => {
    // const styling = {
    //     "featurediv": "flex flex-col items-center mb-8",
    //     "boxdiv": "flex items-center justify-center w-10/12 md:w-10/12 h-24 shadow-sharp-lg hover:shadow-sharp-xl shadow-transition icon-hover cursor-pointer "
    // }

    const feature = {
        "Sleep":{
            icon:<SleepIcon />,
            buttonIcon:<CheckComplete />
        }, 
        "Exercise":{
            icon:<ExerciseIcon />,
            buttonIcon:<CheckComplete />
        },
        "Water":{
            icon:<WaterIcon />,
            buttonIcon:<CheckComplete />
        },
        "Meditation": {
            icon:<MeditateIcon />,
            buttonIcon: <CheckComplete />
        },
        "Meditations": {
            icon:<MeditateIcon />,
            buttonIcon: <CheckComplete />
        }
        ,
        "Meditationss": {
            icon:<MeditateIcon />,
            buttonIcon: <CheckComplete />
        }
    }
    return(
    <div className="flex flex-col w-full items-center  mt-12">
      
        {/* <div className=" flex flex-row items-center mt-14">
            <h1 className="text-normal">Hope You're having a wonderful day!</h1>
            <span><Heart /></span>
        </div> */}
        
        <div className="mt-8 mb-12 flex flex-row items-center cursor-pointer">
                <h1 className="mr-2">
                    Your dailies: 1/6
                </h1>
                <CheckMark />
        </div>

        <div className="w-full md:w-[75%] flex flex-col">
            {/* Features cliclable divs */}
            <div className="grid md:grid-cols-3 gap-0">
            
                {Object.entries(feature).map(([title,{icon, buttonIcon}])=>(
                    <FeatureCard 
                        key={title}
                        title = {title} 
                        icon = {icon} 
                        buttonIcon={buttonIcon} 
                        />
                ))}
                

            </div>

        </div>

        {/* <div className="absolute right-0 bottom-0">3 Fire</div> */}
        
    </div>)
}
export default Features