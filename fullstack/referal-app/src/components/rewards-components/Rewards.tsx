import React, { useEffect, useState } from "react";
import { columns } from "../ui/tables/rewards-table/columns";
import { DataTable } from "../ui/tables/rewards-table/data-table";
import RewardsSimulation from "./RewardsSimulation";
import RewardPerformance from "./RewardsComponents";

function Rewards() {
  return (
    <div className="w-full">
      <div className="">
        <h1 className="text-2xl font-semibold my-4 text-text_color">
          Симуляция вознаграждений
        </h1>
        <RewardsSimulation />
        <RewardPerformance />
        <div className="bg-white w-[1384px] rounded-xl mt-4 p-6 border-[2px] border-blue_accent">
          <h1 className="text-blue_accent text-xl font-semibold mb-4">
            Важная информация
          </h1>
          <span className="text-base text-text_color">
            <li>Расчет происходит автоматически при подтверждении операции</li>
            <li>Максимальные суммы применяются согласно тарифной системе</li>
            <li>Все ставки указаны без учета дополнительных условий</li>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
