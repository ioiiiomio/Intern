"use client"

import React, { useEffect, useState } from "react"

import MyProgress from "../components/MyProgress"
import MonthProgress from "../components/MonthProgress"
import SideBar from "../components/SideBar"
import ProfHeader from "../components/ProfHeader"

import { DataTable } from "../components/ui/table/data-table"
import { columns, EmployeePerformance } from "../components/ui/table/columns"

// Mock async data fetching function
async function getData(): Promise<EmployeePerformance[]> {
  const testData: EmployeePerformance[] = [
    {
      employee: "Иван Иванов",
      rating: 4.8,
      dynamics: "+12%",
      credits1: 12000,
      credits2: 9000,
      deposits: 3000,
      cards: 2,
      ibfl: 500,
    },
  ]
  return testData
}

function HomePage() {
  const [data, setData] = useState<EmployeePerformance[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData()
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <div className="w-screen h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="bg-white rounded-xl shadow p-4 m-4 w-1/6">
        <SideBar />
        <h2 className="text-sm font-semibold italic">This thingy is from Sidebar</h2>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="bg-white rounded-xl shadow p-4">
          <ProfHeader />
        </div>

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-30%">
          <div className="bg-white rounded-xl shadow p-4">
            <h5 className="text-sm font-semibold mb-2 italic">This is from MyProgress</h5>
            <MyProgress />
          </div>
          <div className="bg-white rounded-xl shadow p-4">
            <h5 className="text-sm font-semibold mb-2 italic">This thingy is from MonthProgress</h5>
            <MonthProgress />
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow p-4 h-70%">
          <h2 className="text-lg font-semibold mb-4">Employee Table</h2>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
