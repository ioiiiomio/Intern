import React from "react";
import TwoStepRewardPayments from "./TwoStepRewardsPayments";

function TwoStepRewardItems(){
    const temporary = 50000;

    return(
        <div className="border rounded-xl p-6">
            {/* <p>эту штуку вызывает внутри себя Двухэтапка</p> */}
            <div className="flex justify-between mb-4">
                <div>
                    <p>REF-1234567</p>
                    <p>Депозит</p>
                </div>
                <div>
                    <p>Общая сумма</p>
                    <p>{temporary}</p>
                </div>
                <div>
                    <p>Иконки</p>
                </div>

            </div>
            <div className="mb-4">
                <p>Прогресс выплат</p>
                <p>Здесь будет шкала прогресса</p>
            </div>
            <div className="flex gap-4">
                <TwoStepRewardPayments/>
                <TwoStepRewardPayments/>
            </div>
        </div>
    )
}

export default TwoStepRewardItems;