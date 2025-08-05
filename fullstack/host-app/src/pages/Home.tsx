"use client"

import React, { useEffect, useState } from "react"
import SideBar from "../components/SideBar"


const TablePage = React.lazy(() => import("bankApp/TablePage"))

function HomePage() {

  return (
    
    <div className="w-screen min-h-screen bg-background_prime p-4 grid grid-cols-[300px_1fr_120px] gap-3">
      {/* Sidebar */}
      <div className="bg-background_secondary rounded-2xl border border-border_color max-h-[1042px]">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col space-y-4 min-h-0">
        {/* Header */}
          <React.Suspense fallback={<div>Loading Table...</div>}>
            <TablePage />
          </React.Suspense>
        
      </div>

      {/* Right Padding Box */}
      <div className="bg-transparent" />
    </div>
  )
}

export default HomePage
