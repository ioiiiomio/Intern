import { ChartRadialText } from "./ui/RadialChart";

const bonusVal = 120000;

function MonthProgress() {
  return (
    
    <div className="w-full p-2 items-center">
        <h1 className="font-semibold text-xl mb-4">Общее исполнение за месяц</h1>
     

      <div className="flex items-center">
        {/* Left Radial Chart */}
        <div className="flex flex-col items-center">
          <ChartRadialText />
        </div>

        {/* Center Radial Chart */}
        <div className="flex flex-col items-center ">
          <ChartRadialText />
        </div>

        {/* Bonus Value */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-[40px] font-semibold text-green-600 pb-4 m-l-[24px]">💰 {bonusVal} тг</h1>
          <p className="text-sm text-gray-600">Размер Бонуса</p>
        </div>
      </div>
    </div>
  );
}

export default MonthProgress;
