"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { TableCell } from "../table";
import { Status } from "@/data/twoStepRewards";
import { Progress } from "../../progress";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Check, Clock2 } from "lucide-react";
import { Badge } from "../../badge";
import { ClientsData } from "@/data/clientsData";
// Hre I modify the columns itself(which is good cuz i won't change the table logic and break it)

const TEMPORARY = {
  company: 50000,
  threeMonths: 120000,
  rewarding: 12000,
  status: "done",
  date: "13/08/25",
};

function getStatusPercent(status: Status) {
  if (status === "Выплачено") {
    return 100;
  } else if (status === "Рассчитано") {
    return 50;
  }
  return 0;
}

function getIconForStatus(status: Status) {
  if (status === "Выплачено") {
    return <Check className="w-4 h-4" />;
  } else {
    return <Clock2 className="w-4 h-4" />;
  }
}

export const columns: ColumnDef<ClientsData>[] = [
  {
    accessorKey: "IIN",
    header: "ИИН/БИН",
    cell: ({ row }) => {
      const value = row.getValue("IIN") as number;
      return (
        <TableCell className="whitespace-nowrap">
          <div className="flex items-center gap-2">
            <p className="">{value}</p>
          </div>
        </TableCell>
      );
    },
  },
  {
    accessorKey: "clientType",
    header: "Тип клиента",
    cell: ({ row }) => {
      const value = row.getValue("finance") as ClientTypes;
      return (
        <TableCell className="whitespace-nowrap">
          <div className="flex items-center gap-2">
            <Badge variant={"on_wait"}>{value}</Badge>
          </div>{" "}
        </TableCell>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Имя",
    cell: ({ row }) => {
      const value = row.getValue("reward") as string;
      return (
        <TableCell className="whitespace-nowrap">
          <div className="flex items-center gap-2">
            <p>{value}</p>
          </div>{" "}
        </TableCell>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Статус",
    cell: ({ row }) => {
      const value = row.getValue("status") as Status;
      return (
        <TableCell className="whitespace-nowrap">
          <div className="align-center gap-2">
            <div className="flex gap-1 pb-2">
              <p>{getIconForStatus(value)}</p>
              <p>{value}</p>
            </div>
            <Progress value={getStatusPercent(value)} className="w-[120px]" />
          </div>
        </TableCell>
      );
    },
  },
  // {
  //   accessorKey: "expDate",
  //   header: "Дата",
  //   cell: ({ row }) => {
  //     const rawValue = row.getValue("expDate");
  //     const date = rawValue ? new Date(rawValue as string) : null;
  //     const formatted = date ? format(date, "dd.MM.yyyy", { locale: ru }) : "-";

  //     return (
  //       <TableCell className="whitespace-nowrap">
  //         <div className="flex items-center gap-2">
  //           <p>{formatted}</p>
  //         </div>
  //       </TableCell>
  //     );
  //   },
  // },
  // {
  //   accessorKey: "payDate",
  //   header: "Дата",
  //   cell: ({ row }) => {
  //     const rawValue = row.getValue("payDate");
  //     const date = rawValue ? new Date(rawValue as string) : null;
  //     const formatted = date ? format(date, "dd.MM.yyyy", { locale: ru }) : "-";

  //     return (
  //       <TableCell className="whitespace-nowrap">
  //         <div className="flex items-center gap-2">
  //           <p>{formatted}</p>
  //         </div>
  //       </TableCell>
  //     );
  //   },
  // },
  {
    accessorKey: "lastActivity",
    header: "Последняя активность",
    cell: ({ row }) => {
      const value = row.getValue("lastActivity") as string;
      return (
        <TableCell className="whitespace-nowrap">
          <div className="flex items-center gap-2">
            <p>{value}</p>
          </div>{" "}
        </TableCell>
      );
    },
  },
  {
    accessorKey: "registrationDate",
    header: "Дата создания",
    cell: ({ row }) => {
      const rawValue = row.getValue("date");
      const date = rawValue ? new Date(rawValue as string) : null;
      const formatted = date ? format(date, "dd.MM.yyyy", { locale: ru }) : "-";
      return (
        <TableCell className="whitespace-nowrap">
          <p>{formatted}</p>
        </TableCell>
      );
    },
  },
];
