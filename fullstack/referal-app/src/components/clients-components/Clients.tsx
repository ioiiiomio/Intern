import { getClientsData, ClientsData } from "@/data/clientsData";
import React, { useEffect, useState } from "react";
import { columns } from "../ui/tables/clients-table/columns";
import { DataTable } from "../ui/tables/clients-table/data-table";

function Clients() {
  const [data, setData] = useState<ClientsData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = getClientsData();
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
// Потом обновить
export default Clients;
