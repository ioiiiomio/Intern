"use client"

import React, { useEffect, useState } from "react"

import MyProgress from "../components/MyProgress"
import MonthProgress from "../components/MonthProgress"
import SideBar from "../components/SideBar"
import ProfHeader from "../components/ProfHeader"

import { DataTable } from "../components/ui/table/data-table"
import { columns } from "../components/ui/table/columns"
import { getEmployeeData } from "../data/EmployeeData"
import { EmployeePerformance } from "../data/EmployeeTypes"

function HomePage() {
  const [data, setData] = useState<EmployeePerformance[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEmployeeData()
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <div className="w-screen min-h-screen bg-background_prime p-4 grid grid-cols-[300px_1fr_120px] gap-3">
      {/* Sidebar */}
      <div className="bg-background_secondary rounded-2xl border border-border_color p-4 max-h-[1042px]">
        <SideBar />
        <h2 className="text-sm font-semibold italic mt-4">This thingy is from Sidebar</h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col space-y-4 min-h-0">
        {/* Header */}
        <div className="bg-background_secondary p-4 border  border-border_color rounded-2xl">
          <ProfHeader />
        </div>

        {/* Progress Section */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
          <div className="bg-background_secondary rounded-2xl border  border-border_color p-[32px] col-span-4">
            <MyProgress />
          </div>
          <div className="bg-background_secondary rounded-2xl border  border-border_color p-[32px] col-span-6">
            <MonthProgress />
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl border p-[32px]">
          <DataTable columns={columns} data={data} />
        </div>
      </div>

      {/* Right Padding Box */}
      <div className="bg-transparent" />
    </div>
  )
}

export default HomePage
