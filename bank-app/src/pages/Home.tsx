import React from "react";
import MyProgress from "../components/MyProgress";
import MonthProgress from "../components/MonthProgress";
import EmpTable from "../components/EmpTable";
import SideBar from "../components/SideBar"; // Make sure this path is correct
import ProfHeader from "../components/ProfHeader";

function HomePage() {
  return (
    <div className="w-screen h-screen flex bg-gray-50">
        <div className="bg-white rounded-xl shadow p-4 m-4 w-1/6">
        
        {/* Sidebar */}
          <SideBar />

          <h2 className="text-sm font-semibold italic"> This thingy is from Sidebar</h2>
        </div>


      {/* Main Content */}
      <div className="flex-1 p-6 space-y-6">
        <div className="bg-white rounded-xl shadow p-4">
            <ProfHeader />
        </div>
        {/* Top Section: Progress Components */}
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

        {/* Bottom Section: Employee Table */}
        <div className="bg-white rounded-xl shadow p-4 h-70%">
          <h2 className="text-lg font-semibold mb-4">Employee Table</h2>
          <EmpTable />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
