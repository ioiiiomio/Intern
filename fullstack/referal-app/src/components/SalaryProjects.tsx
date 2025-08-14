import React, { useEffect, useState } from "react";
import { DataTable } from "./ui/tables/salary-projects-table/data-table";
import { columns } from "./ui/tables/salary-projects-table/columns";
import {
  getSalaryRewardData,
  SalaryProjectPerformance,
} from "@/data/salaryProjectPerformance";

function SalaryProjects() {
  const [data, setData] = useState<SalaryProjectPerformance[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = getSalaryRewardData();
      setData(await result);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full">
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}

export default SalaryProjects;
