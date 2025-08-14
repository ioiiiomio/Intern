"use client";
import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { TableCell } from "../table";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Check, Clock2 } from "lucide-react";
import { Badge } from "../../badge";
import { LastApplicationsData, Status } from "@/data/lastApplicationsData";
// Hre I modify the columns itself(which is good cuz i won't change the table logic and break it)

function getStatusPercent(status: Status) {
  if (status === "Выплачено") {
    return 100;
  } else if (status === "Рассчитано") {
    return 50;
  }
  return 0;
}

export const columns: ColumnDef<LastApplicationsData>[] = [
  {
    accessorKey: "requestID",
    header: "Заявка",
    cell: ({ row }) => {
      const value = row.getValue("requestID") as string;
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
    accessorKey: "clientID",
    header: "Клиент",
    cell: ({ row }) => {
      const value = row.getValue("clientID") as number;
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
    accessorKey: "prodType",
    header: "Продукт",
    cell: ({ row }) => {
      const value = row.getValue("prodType") as number;
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
          <div className="align-center">
            <Badge variant={"on_wait"}>{value}</Badge>
          </div>
        </TableCell>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Дата",
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
