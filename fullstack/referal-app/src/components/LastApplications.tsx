import {
  getLastApplicationsData,
  LastApplicationsData,
} from "@/data/lastApplicationsData";
import React, { useEffect, useState } from "react";
import { columns } from "./ui/tables/last-applications-table/columns";
import { DataTable } from "./ui/tables/last-applications-table/data-table";

function LastApplications() {
  const [data, setData] = useState<LastApplicationsData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = getLastApplicationsData();
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

export default LastApplications;
