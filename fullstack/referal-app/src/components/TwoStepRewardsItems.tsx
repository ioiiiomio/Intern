import React from "react";
import { Progress } from "./ui/progress";
import { CircleCheckBig, SquarePen, Trash2 } from "lucide-react";
import { Badge } from "./ui/badge";
import { useAlertDialog } from "./providers/alert-dialog-provider";
import type { DoubleReward, Stage } from "../data/twoStepRewards";

interface TwoStepRewardItemsProps {
  reward: DoubleReward;
}

function TwoStepRewardItems({ reward }: TwoStepRewardItemsProps) {
  const { showAlert } = useAlertDialog();

  return (
    <div className="border rounded-xl p-6 w-full h-74 mb-2">
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-xl font-semibold">{reward.requestID}</p>
          <p className="text-text_color_secondary">{reward.productType}</p>
        </div>
        <div className="flex gap-6">
          <div>
            <p className="text-base text-text_color_secondary mb-2">
              Общая сумма
            </p>
            <p className="text-xl font-semibold text-text_color">
              {reward.sum}
            </p>
          </div>
          <div className="flex gap-3">
            <Trash2
              className="text-bank_red w-6 h-6 cursor-pointer"
              onClick={() =>
                showAlert({
                  title: "Удалить вознаграждение?",
                  description: `Это действие нельзя отменить. Вознаграждение на сумму ${reward.sum} КЗТ будет удалено навсегда.`,
                  cancelText: "Отменить",
                  actionText: "Удалить",
                  onConfirm: () => alert("Удалено"),
                })
              }
            />
            <SquarePen
              className="text-text_color w-6 h-6 cursor-pointer"
              onClick={() =>
                showAlert({
                  title: "Редактирование вознаграждения",
                  actionText: "Сохранить",
                  cancelText: "Отмена",
                  firstSum: reward.stages[0]?.sum || 0,
                  secondSum: reward.stages[1]?.sum || 0,
                  comments: reward.activeComments || "",
                  onConfirm: (data) => {
                    console.log("Edited values:", data);
                  },
                })
              }
            />
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-2 text-sm font-medium">Прогресс выплат</p>
        <Progress
          value={
            (reward.stages.filter((s) => s.status === "Выплачено").length /
              reward.stages.length) *
            100
          }
          className="w-full"
        />
      </div>

      <div className="flex gap-4 justify-between">
        {reward.stages.map((stage) => (
          <TwoStepRewardPayments key={stage.stageInd} stage={stage} />
        ))}
      </div>
    </div>
  );
}

function TwoStepRewardPayments({ stage }: { stage: Stage }) {
  return (
    <div className="w-full h-[132px] flex border rounded-xl bg-background_prime p-6">
      <div className="w-full h-[84px]">
        <div className="flex gap-2 align-center mb-3">
          <CircleCheckBig
            className={
              stage.status === "Выплачено" ? "text-bank_green" : "text-gray-400"
            }
          />
          <p className="text-xl font-semibold">30 дней</p>
        </div>
        <p className="mb-3 size-base font-medium">{stage.sum}тг</p>
        <p className="size-sm font-regular text-text_color_secondary">
          {stage.remainingTime}
        </p>
      </div>
      <div className="justify-self-end">
        <Badge
          variant={
            stage.status === "Выплачено"
              ? "paid"
              : stage.status === "Рассчитано"
              ? "checked"
              : "waiting"
          }
        >
          {stage.status}
        </Badge>
      </div>
    </div>
  );
}

export default TwoStepRewardItems;
