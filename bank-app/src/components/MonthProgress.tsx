// // Общее исполнение за Месяц

import { RadialBarChart } from "recharts";
import { CardContent } from "./ui/card";
import { ChartRadialText} from './ui/RadialChart';


function MonthProgress(){
    return(
        <div>
            <h1 className="font-semibold text-xl"> Общее исполнение за месяц</h1>
            <div className="grid grid-cols-3 gap-1 justify-between">
                <div className="m-2">
                    <ChartRadialText />
                    
                </div>
                <div className="m-2">
                    <ChartRadialText />
                   

                </div>
                <div className="m-2">
                     <h1>Bonuses</h1>

                </div>
                               
            </div>

            </div>
       
    )
}

export default MonthProgress;