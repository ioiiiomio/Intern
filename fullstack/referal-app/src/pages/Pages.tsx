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
  return <Rewards />;
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
