"use client"

import QuickActions from "../components/QuickActions"
import Applications from "../components/Applications"
import React from "react"
import LastApplications from "../components/LastApplications"
import Rewards from "../components/Rewards"
import TwoStepRewards from "../components/TwoStepRewards"
import SalaryProjects from "../components/SalaryProjects"

function ReferalPage() {
  return (
    <div className="w-screen min-h-screen bg-background_prime p-4 text-text-color">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-semibold">Реферальная программа</h1>

        <div>
          <Applications />
        </div>

        <div className="bg-background_secondary rounded-2xl border border-border_color">
          <QuickActions />
        </div>

        <div className="bg-white rounded-xl border p-[32px]">
          <LastApplications />
        </div>

        <div className="bg-white rounded-xl border p-[32px]">
          <Rewards />
        </div>

        <div className="bg-white rounded-xl border p-[32px]">
          <TwoStepRewards />
        </div>

        <div className="bg-white rounded-xl border p-[32px]">
          <SalaryProjects />
        </div>
      </div>
    </div>
  )
}

export default ReferalPage
