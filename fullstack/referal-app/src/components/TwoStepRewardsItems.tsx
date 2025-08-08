import React from "react";
import { Progress } from "./ui/progress";
import {
  AlarmCheckIcon,
  CircleCheckBig,
  SquarePen,
  Trash2,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { useAlertDialog } from "./providers/alert-dialog-provider";
import { title } from "process";

function TwoStepRewardItems() {
  let temporary = 50000;
  let ticket_name = "REF-1234567";
  let finance_type = "Депозит";

  const { showAlert } = useAlertDialog();

  return (
    <div className="border rounded-xl p-6 w-full h-74">
      {/* <p>эту штуку вызывает внутри себя Двухэтапка</p> */}
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-xl font-semibold">{ticket_name}</p>
          <p className="text-text_color_secondary">{finance_type}</p>
        </div>
        <div className="flex gap-6">
          <div>
            <p className="text-base text-text_color_secondary mb-2">
              Общая сумма
            </p>
            <p className="text-xl font-semibold text-text_color">{temporary}</p>
          </div>
          <div className="flex gap-3">
            <Trash2
              className="text-bank_red w-6 h-6 cursor-pointer"
              onClick={() =>
                showAlert({
                  title: "Удалить вознаграждение?",
                  description: `Это действие нельзя отменить. Вознаграждение на сумму ${temporary} КЗТ будет удалено Навсегда.`,
                  cancelText: "Отменить",
                  actionText: "Удалить",
                  onConfirm: () => alert("Удалено типа ;>"),
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
                  firstSum: 25000,
                  secondSum: 25000,
                  comments: "",
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
        <Progress value={75} className="w-full" />
      </div>
      <div className="flex gap-4 justify-between">
        <TwoStepRewardPayments />
        <TwoStepRewardPayments />
      </div>
    </div>
  );
}

function TwoStepRewardPayments() {
  return (
    <div className="w-full h-[132px] flex border rounded-xl bg-background_prime p-6">
      {/* Тут ширина пока такая, без понятия почему она по себе не помещается нормально */}
      <div className="w-[467px] h-[84px] border">
        <div className="flex gap-2 align-center mb-3">
          <CircleCheckBig className="text-bank_green" />
          <p className="text-xl font-semibold">Дата</p>
        </div>

        <p className="mb-3 size-base font-medium">50 000тг</p>
        <p className="size-sm font-regular text-text_color_secondary">
          Статус здесь
        </p>
      </div>
      <div className="border">
        <Badge variant="paid">Рассчитано</Badge>
      </div>
    </div>
  );
}

export default TwoStepRewardItems;
