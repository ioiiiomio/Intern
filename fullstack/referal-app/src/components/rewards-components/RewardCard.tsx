import React from "react";
import { Badge } from "../ui/badge";
import Line from "../ui/line";

function RewardCard() {
  const temporary = 1.4;
  const sum = 1000000;

  return (
    <div className="bg-white w-[680px] h-[392px] rounded-xl mt-4 p-6">
      <h1 className="text-xl font-semibold">Кредиты физлиц</h1>
      <div className="flex my-6 gap-2">
        <Badge variant="checked">Необеспеченный: {temporary}</Badge>
        <Badge variant="checked">Необеспеченный: {temporary}</Badge>
      </div>

      <div className="mb-3 space-y-3">
        <div>
          <div className="flex justify-between">
            <p>
              Необеспеченный {temporary} {sum}
            </p>
            <p className="text-bank_green">
              Необеспеченный {temporary} {sum}
            </p>
          </div>
          <Line />
        </div>
        {/* Надо как-то настроить чтобы оно динамически прогружало */}
        <div>
          <div className="flex justify-between">
            <p>
              Необеспеченный {temporary} {sum}
            </p>
            <p className="text-bank_green">
              Необеспеченный {temporary} {sum}
            </p>
          </div>
          <Line />
        </div>

        <div>
          <div className="flex justify-between">
            <p>
              Необеспеченный {temporary} {sum}
            </p>
            <p className="text-bank_green">
              Необеспеченный {temporary} {sum}
            </p>
          </div>
          <Line />
        </div>

        <div>
          <div className="flex justify-between">
            <p>
              Необеспеченный {temporary} {sum}
            </p>
            <p className="text-bank_green">
              Необеспеченный {temporary} {sum}
            </p>
          </div>
          <Line />
        </div>
      </div>
    </div>
  );
}

export default RewardCard;
