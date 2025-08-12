import React from "react";
import TwoStepRewardItems from "./TwoStepRewardsItems";
import { doubleRewards } from "../data/twoStepRewards";
import Rewards from "./Rewards";

function TwoStepRewards() {
  return (
    <div className="w-full">
      {doubleRewards.map((reward) => (
        <TwoStepRewardItems key={reward.requestID} reward={reward} />
      ))}
    </div>
  );
}

export default TwoStepRewards;
