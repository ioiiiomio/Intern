import React from "react";
import { Progress } from "../components/ui/progress";
import { Badge, getBadgeVariant } from "./ui/badge";
import { Percent } from "lucide-react";

const testData = [
  { id: 1, required: 13000, actual: 10000 },
  { id: 2, required: 15000, actual: 10000 },
  { id: 3, required: 40000, actual: 3200 },
];


function MyProgress() {

  const data1 = testData.find((item) => item.id === 1)!;
  const data2 = testData.find((item) => item.id === 2)!;
  const data3 = testData.find((item) => item.id === 3)!;


  const calculatePercent = (actual: number, required: number) =>
    required > 0 ? (Math.floor((actual / required) * 100)) :0;

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4">Ваш прогресс</h2>

      <div className="flex flex-col gap-2 mb-6">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-700">Залоговые кредиты</p>
          <p className="text-xs text-right text-gray-500">{data1.required}</p>
        </div>
        <Progress value={calculatePercent(data1.actual, data1.required)} length={516} />
        <div className="flex justify-start">
          <Badge variant={getBadgeVariant(calculatePercent(data1.actual, data1.required))}>
            {calculatePercent(data1.actual, data1.required)}% ({data1.actual})
          </Badge>
        </div>
      </div>

      <div className="flex flex-col gap-2 mb-6">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-700">Без залоговые кредиты</p>
          <p className="text-xs text-right text-gray-500">{data2.required}</p>
        </div>
        <Progress value={calculatePercent(data2.actual, data2.required)} length={516}/>
        <div className="flex justify-start">
          <Badge variant={getBadgeVariant(calculatePercent(data2.actual, data2.required))}>
                {calculatePercent(data2.actual, data2.required)}% ({data2.actual})
          </Badge>
          

         
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-sm font-medium text-gray-700">Депозиты</p>
          <p className="text-xs text-right text-gray-500">{data3.required}</p>
        </div>
        <Progress value={calculatePercent(data3.actual, data3.required)} length={516}/>
        <div className="flex justify-start">
          <Badge variant={getBadgeVariant(calculatePercent(data3.actual, data3.required))}>
            {calculatePercent(data3.actual, data3.required)}% ({data3.actual})
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default MyProgress;
