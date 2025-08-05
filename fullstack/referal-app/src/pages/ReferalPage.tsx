"use client"

import QuickActions from "../components/QuickActions"
import Applications from "../components/Applications"
import React, { useEffect, useState } from "react"
import LastApplications from "../components/LastApplications"
import Rewards from "../components/Rewards"
import TwoStepRewards from "../components/TwoStepRewards"
import SalaryProjects from "../components/SalaryProjects"

function ReferalPage() {
  

  return (
    
    <div className="w-screen min-h-screen bg-background_prime p-4 grid grid-cols-[300px_1fr_120px] gap-3 text-text-color">
      {/* Sidebar */}
      <div className="bg-background_secondary rounded-2xl border border-border_color max-h-[1042px]">
        <h2 className="text-sm font-semibold italic mt-4">This thingy is from Sidebar</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col space-y-4 min-h-0">
        <h1 className="text-2xl font-semibold">Реферальная программа</h1>
        {/* Заявки */}
        <div className="">
          <Applications />
        </div>

        {/* Progress Section */}
        <div className="">
          <div className="bg-background_secondary rounded-2xl border  border-border_color p-8 col-span-4">
           <QuickActions />
          </div>
          
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

      {/* Right Padding Box */}
      <div className="bg-transparent" />
    </div>
  )
}

export default ReferalPage
