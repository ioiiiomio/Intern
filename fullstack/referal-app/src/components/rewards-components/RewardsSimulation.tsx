import { SelectTrigger, SelectValue } from "../ui/select";
import React from "react";
import { Select, SelectContent, SelectItem } from "../ui/select";
import { Button } from "../ui/button";

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
          <p className="text-xs text-text_color_secondary mb-2">Тип клиента</p>
          <Select>
            <SelectTrigger
              className="
            "
            >
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Юридическое лицо</SelectItem>
              <SelectItem value="dark">Частное лицо</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-xs text-text_color_secondary mb-2">Продукт</p>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Юридическое лицо</SelectItem>
              <SelectItem value="dark">Частное лицо</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-xs text-text_color_secondary mb-2">Сумма</p>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Выберите категорию" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Юридическое лицо</SelectItem>
              <SelectItem value="dark">Частное лицо</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-6">
          <Button className="bg-blue_accent rounded-xl text-white font-medium text-base w-[260px] h-[51px]">
            Рассчитать вознаграждение
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RewardsSimulation;
