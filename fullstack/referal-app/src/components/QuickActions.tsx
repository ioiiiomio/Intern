import React from "react";
import PlusIcon from "../../public/assets/icons/plus-ic.svg"
import CalculatorIcon from "../../public/assets/icons/calculator-ic.svg"
import WorkflowIcon from "../../public/assets/icons/workflow-ic.svg"
import SearchIcon from "../../public/assets/icons/search-ic.svg"
import ExportIcon from "../../public/assets/icons/export-ic.svg"

function QuickActions() {
  return (
    <div className="w-full p-6">
      <div className="mb-4">
        <h1 className="font-semibold text-xl">Быстрые действия</h1>
      </div>

      <div className="flex gap-2.5 flex-wrap justify-between">
        {/* Button 1 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-bank_blue">
          <PlusIcon className="w-4 h-4" />
          <p className="text-white font-medium text-base">Новая заявка</p>
        </div>

        {/* Button 2 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-background_prime">
          <CalculatorIcon className="w-4 h-4" />
          <p className="text-text_color font-medium text-base">Симуляция</p>
        </div>

        {/* Button 3 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-background_prime">
          <WorkflowIcon className="w-4 h-4" />
          <p className="text-text_color font-medium text-base">Workflow</p>
        </div>

        {/* Button 4 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-background_prime">
          <SearchIcon className="w-4 h-4" />
          <p className="text-text_color font-medium text-base">Поиск клиента</p>
        </div>

        {/* Button 5 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-background_prime">
          <ExportIcon className="w-4 h-4" />
          <p className="text-text_color font-medium text-base">Экспорт отчета</p>
        </div>
      </div>
    </div>
  );
}

export default QuickActions;
