"use client";

import React from "react";
import "tailwindcss/tailwind.css";

import QuickActions from "../components/QuickActions";
import Applications from "../components/Applications";
import LastApplications from "../components/LastApplications";
import Rewards from "../components/Rewards";
import TwoStepRewards from "../components/TwoStepRewards";
import SalaryProjects from "../components/SalaryProjects";
import { AlertDialogProvider } from "@/components/providers/alert-dialog-provider";

function ReferalPage() {
  return (
    <AlertDialogProvider>
      {/* Разрешаю вызывать Алерты в любой части приложения */}
      <div className="flex flex-col space-y-4 no-scrollbar overflow-y-scroll">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold">Реферальная программа</h1>

        {/* Applications Section */}
        <div className="bg-background_secondary p-4 border border-border_color rounded-2xl">
          <Applications />
        </div>

        {/* Quick Actions */}
        <div className="bg-background_secondary p-4 border border-border_color rounded-2xl">
          <QuickActions />
        </div>

        {/* Last Applications */}
        <div className="bg-white rounded-xl border p-[32px]">
          <LastApplications />
        </div>

        {/* Rewards */}
        <div className="bg-white rounded-xl border p-[32px]">
          <Rewards />
        </div>

        {/* Two Step Rewards */}
        <div className="bg-white rounded-xl border p-6">
          <p className="mb-4 text-xl font-semibold">
            Двухэтапные вознаграждения
          </p>
          <TwoStepRewards />
        </div>

        {/* Salary Projects */}
        <div className="bg-white rounded-xl border p-[32px]">
          <SalaryProjects />
        </div>
      </div>
    </AlertDialogProvider>
  );
}

export default ReferalPage;
