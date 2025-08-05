import React from "react";

function QuickActions() {
  return (
    <div className="w-full p-6">
      <div className="mb-4">
        <h1 className="font-semibold text-xl">Быстрые действия</h1>
      </div>

      <div className="flex gap-2.5 flex-wrap">
        {/* Button 1 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-bank_blue">
          <img src="../../assets/icons/plus-ic.svg" alt="plus-ic" className="w-4 h-4" />
          <p className="text-white font-medium text-base">Новая заявка</p>
        </div>

        {/* Button 2 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-background_prime">
          <img src="../../assets/icons/calculator-ic.svg" alt="calc-ic" className="w-4 h-4" />
          <p className="text-text_color font-medium text-base">Симуляция</p>
        </div>

        {/* Button 3 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-background_prime">
          <img src="../../assets/icons/workflow-ic.svg" alt="workflow-ic" className="w-4 h-4" />
          <p className="text-text_color font-medium text-base">Workflow</p>
        </div>

        {/* Button 4 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-background_prime">
          <img src="../../assets/icons/search-ic.svg" alt="search-ic" className="w-4 h-4" />
          <p className="text-text_color font-medium text-base">Поиск клиента</p>
        </div>

        {/* Button 5 */}
        <div className="w-[259px] h-[51px] flex items-center justify-center gap-4 rounded-2xl bg-background_prime">
          <img src="../../assets/icons/export-ic.svg" alt="export-ic" className="w-4 h-4" />
          <p className="text-text_color font-medium text-base">Экспорт отчета</p>
        </div>
      </div>
    </div>
  );
}

export default QuickActions;
