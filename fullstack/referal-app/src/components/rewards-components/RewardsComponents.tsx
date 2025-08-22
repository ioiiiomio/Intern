import React, { useState } from "react";
import RewardCard from "./RewardCard";

const categories = [
  { id: "individuals", label: "Физлица" },
  { id: "msb", label: "МСБ" },
  { id: "kb", label: "КБ" },
  { id: "cards", label: "Карты" },
  { id: "transactions", label: "Транзакции" },
];

// Example dataset
const rewardsByCategory: Record<string, { title: any[]; data: any[] }> = {
  individuals: { title: ["Кредиты физлиц", "Другие продукты"], data: [1, 2] },
  msb: {
    title: ["МСБ кредитование", "МСБ Гарантии", "Другие продукты МСБ"],
    data: [1, 2, 3],
  },
  kb: {
    title: ["КБ Кредитование", "КБ Гарантии и линии", "Другие продукты КБ"],
    data: [1],
  },
  cards: {
    title: ["Зарплатные проекты", "Выпуск карт"],
    data: [1, 2, 3, 4],
  },
  transactions: { title: ["Платежные системы", "v"], data: [1, 2] },
};

function RewardPerformance() {
  const [selectedCategory, setSelectedCategory] = useState("individuals");

  return (
    <div>
      {/* Tabs / Categories */}
      <div className="flex gap-8 mb-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`cursor-pointer pb-1 ${
              selectedCategory === cat.id
                ? "border-b-2 border-bank_orange font-semibold text-text_color"
                : "text-text_color_secondary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Cards wrapper */}
      <div className="flex gap-6 flex-wrap">
        {rewardsByCategory[selectedCategory].data.map((_, idx) => (
          <RewardCard
            key={idx}
            title={rewardsByCategory[selectedCategory].title}
          />
        ))}
      </div>
    </div>
  );
}

export default RewardPerformance;
