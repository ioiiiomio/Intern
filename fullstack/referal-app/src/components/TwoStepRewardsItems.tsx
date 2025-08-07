import React from "react";
import { Progress } from "./ui/progress";
import { AlarmCheckIcon, SquarePen, Trash2 } from "lucide-react";
import { useAlertDialog } from "./providers/alert-dialog-provider";
import { title } from "process";

function TwoStepRewardItems() {
  let temporary = 50000;
  let ticket_name = "REF-1234567";
  let finance_type = "Депозит";

  const { showAlert } = useAlertDialog();

  return (
    <div className="border rounded-xl p-6 w-334 h-74">
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
              className="text-bank_red"
              onClick={() =>
                showAlert({
                  title: "Удалить вознаграждение?",
                  description: `Это действие нельзя отменить. Вознаграждение на сумму ${temporary} КЗТ будет удалено Навсегда.`,
                  cancelText: "Отменить",
                  actionText: "Удалить",
                  onConfirm: () => alert("Удалено типа ;>"),
                })
              }
            >
              Test Alert
            </Trash2>
            <SquarePen className="text-text_color w-6 h-6" />
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
    <div className="w-[636px] h-[132px] flex border rounded-xl bg-background_prime p-6">
      <div className=" gap-3 w-[467px] h-[84px] border">
        <p>Дата</p>
        <p>Сумма тг</p>
        <p>Статус</p>
      </div>
      <div className="border">
        <p>Рассчитано</p>
      </div>
    </div>
  );
}

export default TwoStepRewardItems;
