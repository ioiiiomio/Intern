import React from "react";
import TwoStepRewardItems from "./TwoStepRewardsItems";

function TwoStepRewards(){
    return(
        <div className="w-full">
            <div className="mb-4">
                <p className="text-xl font-semibold">Двухэтапные вознаграждения</p>
            </div>
            <div> 
                <TwoStepRewardItems />
            </div>
        </div>
    );
}


export default TwoStepRewards;