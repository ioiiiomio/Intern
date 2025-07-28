"use client"

import React, { useEffect, useState } from "react"

import MyProgress from "../components/MyProgress"
import MonthProgress from "../components/MonthProgress"
import SideBar from "../components/SideBar"
import ProfHeader from "../components/ProfHeader"

import { DataTable } from "../components/ui/table/data-table"
import { columns} from "../components/ui/table/columns"
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
    <div className="w-screen min-h-screen bg-background_prime grid grid-cols-1 md:grid-cols-3 space-x-2 ">
      {/* sidethingy */}
      <div className="h-[1042px] w-[300px] z-40 bg-white rounded-2xl  border p-4 m-4">
        <SideBar />
        <h2 className="text-sm font-semibold italic">This thingy is from Sidebar</h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 space-y-2 grid grid-cols-4 md:grid-cols-1 gap-4 h-30%">
        {/* here i divide the halp of page into 4 sections */}

        {/* Header */}
        <div className="bg-white p-2 border rounded-2xl">
          <ProfHeader />
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-30%">
          <div className="bg-white rounded-xl shadow p-4 fit">
            <MyProgress />
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h5 className="text-sm font-semibold mb-2 italic">This thingy is from MonthProgress</h5>
            <MonthProgress />
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow p-4 h-70%">
          <h2 className="text-lg font-semibold mb-4">Таблица Сотрудников</h2>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
