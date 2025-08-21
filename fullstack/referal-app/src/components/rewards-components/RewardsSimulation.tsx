import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import React from "react";
import { Select, SelectContent, SelectItem } from "../ui/select";

function RewardsSimulation() {
  return (
    <div className="bg-white rounded-xl w-[1384px] mb-4 p-6">
      <div className="mb-6">
        <p className="mb-4 text-xl font-semibold text-text_color">
          Симуляция Вознаграждения
        </p>
        <p className="text-text_color_secondary">
          Рассчитайте размер Вознаграждения для различных продуктов и сумм
        </p>
      </div>

      <div className="flex gap-4">
        <div>
          <p className="text-xs text-text_color_secondary">Тип клиента</p>
          <Select>
            <SelectTrigger className="w-[342.6666564941406px]">
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Юридическое лицо</SelectItem>
              <SelectItem value="dark">Частное лицо</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-xs text-text_color_secondary">Продукт</p>
          <Select>
            <SelectTrigger className="w-[342.6666564941406px]">
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Юридическое лицо</SelectItem>
              <SelectItem value="dark">Частное лицо</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-xs text-text_color_secondary">Сумма</p>
          <Select>
            <SelectTrigger className="w-[342.6666564941406px]">
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Юридическое лицо</SelectItem>
              <SelectItem value="dark">Частное лицо</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p>Рассчитать Вознаграждения</p>
        </div>
      </div>
    </div>
  );
}

export default RewardsSimulation;
