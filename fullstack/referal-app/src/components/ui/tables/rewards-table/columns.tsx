"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { TableCell } from "../table";
import { RewardPerformance, Status } from "@/data/rewardsData";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Progress } from "../../progress";
import { Check, Clock2 } from "lucide-react";
// Hre I modify the columns itself(which is good cuz i won't change the table logic and break it)

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

export const columns: ColumnDef<RewardPerformance>[] = [
  {
    accessorKey: "sum",
    header: "Сумма",
    cell: ({ row }) => {
      const value = row.getValue("sum") as string;
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
  {
    accessorKey: "calcDate",
    header: "Рассчитано",
    cell: ({ row }) => {
      const rawValue = row.getValue("calcDate");
      const date = rawValue ? new Date(rawValue as string) : null;
      const formatted = date ? format(date, "dd.MM.yyyy", { locale: ru }) : "-";

      return (
        <TableCell className="whitespace-nowrap">
          <div className="flex items-center gap-2">
            <p>{formatted}</p>
          </div>
        </TableCell>
      );
    },
  },
  {
    accessorKey: "payDate",
    header: "Выплачено",
    cell: ({ row }) => {
      const rawValue = row.getValue("calcDate");
      const date = rawValue ? new Date(rawValue as string) : null;
      const formatted = date ? format(date, "dd.MM.yyyy", { locale: ru }) : "-";

      return (
        <TableCell className="whitespace-nowrap">
          <div className="flex items-center gap-2">
            <p>{formatted}</p>
          </div>
        </TableCell>
      );
    },
  },
];
