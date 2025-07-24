import { Progress } from "../components/ui/progress";
import React from "react";

const testData = [
  { id: 1, required: 15000, actual: 18000 },
  { id: 2, required: 15000, actual: 12000 },
  { id: 3, required: 40000, actual: 200 },
];

function MyProgress() {
  const data1 = testData.find((item) => item.id === 1);
  const data2 = testData.find((item) => item.id === 2);
  const data3 = testData.find((item) => item.id === 3);

  const calculatePercent = (actual: number, required: number) =>
    required > 0 ? Math.min((actual / required) * 100, 100) : 0;

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-2xl shadow-md border border-gray-200 bg-white">
      <h2 className="text-lg font-semibold mb-4">Ваш прогресс</h2>

      <div className="mb-4">
        <p className="mb-1">Залоговые кредиты</p>
        <Progress value={calculatePercent(data1!.actual, data1!.required)} />
        <p className="text-xs text-muted-foreground mt-1">
          {data1?.actual} / {data1?.required}
        </p>
      </div>

      <div className="mb-4">
        <p className="mb-1">Без залоговые кредиты</p>
        <Progress value={calculatePercent(data2!.actual, data2!.required)} />
        <p className="text-xs text-muted-foreground mt-1">
          {data2?.actual} / {data2?.required}
        </p>
      </div>

      <div>
        <p className="mb-1">Депозиты</p>
        <Progress value={calculatePercent(data3!.actual, data3!.required)} />
        <p className="text-xs text-muted-foreground mt-1">
          {data3?.actual} / {data3?.required}
        </p>
      </div>
    </div>
  );
}

export default MyProgress;
