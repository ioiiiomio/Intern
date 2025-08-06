import React from "react";
import { ChartRadialText } from "./ui/RadialChart";

const bonusVal = 120000;

function MonthProgress() {
  // add confetti
  return (
    
    <div className="w-full">
      <h1 className="font-semibold text-xl mb-6">Общее исполнение за месяц</h1>
      <button onClick={() => window.location.reload()} className="border border-text_color_secondary rounded-2xl p-2">Update</button>

      <div className="flex justify-between items-center mt-8">
        {/* Left Radial Chart */}
        <div className="flex flex-col items-center ">
          <ChartRadialText />
        </div>

        {/* Center Radial Chart */}
        <div className="flex flex-col items-center ">
          <ChartRadialText />
        </div>

        {/* Bonus Value */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 ml-[24px] pb-4">
            <span className="text-5xl">💰</span>
            <h1 className="bg-gradient-to-b from-bank_green to-[#B5DDAB] text-5xl font-semibold bg-clip-text text-transparent">{bonusVal} тг
            </h1>
          </div>

          <p className="text-base font-normal text-gray-600">Размер Бонуса</p>
        </div>
      </div>
    </div>
  );
}

export default MonthProgress;
