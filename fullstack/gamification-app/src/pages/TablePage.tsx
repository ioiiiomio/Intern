"use client";

import React, { useEffect, useState } from "react";
// импортим тэйлвинд чтобы хост обрабатывал стили
import "tailwindcss/tailwind.css";
import MyProgress from "../components/MyProgress";
import MonthProgress from "../components/MonthProgress";
import ProfHeader from "../components/ProfHeader";

import { DataTable } from "../components/ui/table/data-table";
import { columns } from "../components/ui/table/columns";
import { getEmployeeData } from "../data/EmployeeData";
import { EmployeePerformance } from "../data/EmployeeTypes";

function TablePage() {
  const [data, setData] = useState<EmployeePerformance[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEmployeeData();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col space-y-4 no-scrollbar overflow-y-scroll text-text_color">
      {/* Page Title */}
      <h1 className="text-2xl font-semibold">Статистика сотрудников</h1>

      {/* Header */}
      <div className="bg-white p-4 border border-border_color rounded-2xl">
        <ProfHeader />
      </div>

      {/* Progress Section */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        <div className="bg-white rounded-2xl border border-border_color p-8 col-span-4">
          <MyProgress />
        </div>
        <div className="bg-white rounded-2xl border border-border_color p-8 col-span-6">
          <MonthProgress />
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl border p-[32px]">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
  // return(

  //   // <div className="bg-blue-500 text-white p-4">Should be styled</div>

  // )
}

export default TablePage;
