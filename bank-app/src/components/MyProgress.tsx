import { Progress } from "@radix-ui/react-progress";
import React from "react"

function MyProgress() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 rounded-2xl shadow-md border border-gray-200 bg-white">
      <h2 className="text-lg font-semibold mb-4">Ваш прогресс</h2>

      <div className="mb-4">
        <p className="mb-1">Залоговые кредиты</p>
        <Progress value={70} />
      </div>

      <div className="mb-4">
        <p className="mb-1">Без залоговые кредиты</p>
        <Progress value={45} />
      </div>

      <div>
        <p className="mb-1">Депозиты</p>
        <Progress value={85} />
      </div>
    </div>
  )
}

export default MyProgress;
