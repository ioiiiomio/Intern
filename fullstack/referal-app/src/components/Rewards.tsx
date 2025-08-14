import React, { useEffect, useState } from "react";
import { columns } from "./ui/tables/rewards-table/columns";
import { DataTable } from "./ui/tables/rewards-table/data-table";
import { getRewardData, RewardPerformance } from "@/data/rewardsData";

function Rewards() {
  const [data, setData] = useState<RewardPerformance[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = getRewardData();
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

export default Rewards;
