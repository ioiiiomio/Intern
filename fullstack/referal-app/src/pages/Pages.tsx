"use client";

import React from "react";
import "tailwindcss/tailwind.css";

import Applications from "@/components/application-components/Applications";
import Rewards from "@/components/rewards-components/Rewards";
import LastApplications from "@/components/LastApplications";
import Clients from "@/components/clients-components/Clients";
import RewardsSimulation from "@/components/rewards-components/RewardsSimulation";
import RewardPerformance from "@/components/rewards-components/RewardsComponents";

export function ApplicationPage() {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold my-4">Заявки</h1>
      <LastApplications />
    </div>
  );
}

export function ClientsPage() {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold my-4">Управление клиентами</h1>
      <Clients />
    </div>
  );
}

export function RewardsPage() {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold my-4">Симуляция вознаграждений</h1>
      <RewardsSimulation />
      <RewardPerformance />
      <div className="bg-white max-w-364 rounded-xl mt-4 p-6 border-[2px] border-blue_accent">
        <h1 className="text-blue_accent text-xl font-semibold mb-4">
          Важная информация
        </h1>
        <span className="text-base">
          <li>Расчет происходит автоматически при подтверждении операции</li>
          <li>Максимальные суммы применяются согласно тарифной системе</li>
          <li>Все ставки указаны без учета дополнительных условий</li>
        </span>
      </div>
    </div>
  );
}

export function SimulationPage() {
  return (
    <div className="bg-white border border-r-4">
      <p>Simulation stuff</p>
    </div>
  );
}

export function CuratorsPanelPage() {
  return (
    <div className="bg-white border border-r-4">
      <p>Stranichka</p>
    </div>
  );
}
