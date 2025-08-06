import React from "react";
import TwoStepRewardPayments from "./TwoStepRewardsPayments";
import { Progress } from "@radix-ui/react-progress";

function TwoStepRewardItems(){
    let temporary = 50000;
    let ticket_name = "REF-1234567";
    let finance_type ="Депозит"


    return(
        <div className="border rounded-xl p-6 w-[1336px] h-[296px]">
            {/* <p>эту штуку вызывает внутри себя Двухэтапка</p> */}
            <div className="flex justify-between mb-4">
                <div>
                    <p className="text-xl font-semibold">{ticket_name}</p>
                    <p className="text-text_color_secondary">{finance_type}</p>
                </div>
                <div className="flex gap-6">
                    <div>
                        <p className="text-text_color_secondary">Общая сумма</p>
                        <p className="text-xl font-semibold">{temporary}</p>
                    </div>
                    <div>
                        <p>Иконки</p>
                    </div>
                </div>

            </div>
            <div className="mb-4">
                <p>Прогресс выплат</p>
                <Progress value={73} />
            </div>
            <div className="flex gap-4 justify-between">
                <TwoStepRewardPayments/>
                <TwoStepRewardPayments/>
            </div>
        </div>
    )
}

export default TwoStepRewardItems;