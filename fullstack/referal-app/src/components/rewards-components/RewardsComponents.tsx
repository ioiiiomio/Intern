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
const rewardsByCategory: Record<string, { title: string; data: any[] }> = {
  individuals: {
    title: "Кредиты физлиц",
    data: [1, 2], // just placeholders for cards
  },
  msb: {
    title: "МСБ кредиты",
    data: [1, 2, 3],
  },
  kb: {
    title: "КБ кредиты",
    data: [1],
  },
  cards: {
    title: "Карты",
    data: [1, 2, 3, 4],
  },
  transactions: {
    title: "Транзакции",
    data: [1, 2],
  },
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
                ? "border-b-2 border-bank_orange font-semibold"
                : "text-gray-500"
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
