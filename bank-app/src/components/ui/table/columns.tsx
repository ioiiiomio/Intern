"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EmployeePerformance } from "../../../data/EmployeeTypes"
import { Progress } from "../progress";
import { ArrowUpIcon, ArrowUpRight, Table } from "lucide-react";
import {arrowIcon} from "../arrow"
import { TableCell } from "./table";
import { faker, Faker } from "@faker-js/faker";
// Hre I modify the columns itself(which is good cuz i won't change the table logic and break it)

const TARGET = {
  rating: 5,
  credits1: 20000,
  credits2: 15000,
  deposits: 10000,
  cards: 5, 
  ibfl: 1000,
}

  const calculatePercent = (value: number, max: number) =>
     max > 0 ? (Math.floor((value / max) * 100)) :0;
    
export const columns: ColumnDef<EmployeePerformance>[] = [

{
  accessorKey: "employee",
  header: "Сотрудник",
  cell: ({ row }) => {
    const pic = faker.image.avatarGitHub();
// const pic = row.getValue("pic") as string;
    const name = row.getValue("employee") as string;

    return (
      <TableCell className="whitespace-nowrap"> 
        <div className="flex items-center gap-2">
        <img
          src={pic}
          alt="Avatar"
          className="w-8 h-8 rounded-full object-cover border border_color"
        />
        <p className="text-sm font-medium">{name}</p>
      </div>  </TableCell>
    );
  },
},

  {
    accessorKey: "rating",
    header: "Рейтинг",
    cell: ({ row }) => {
      const value = row.getValue("rating") as number
      return (
        <div className="flex items-center gap-1">
          <Progress value={calculatePercent(value, TARGET.rating)} />
         <span>{TARGET.rating > 0 ? (Math.floor((value / TARGET.rating) * 100)) :0}% </span>
        </div>
    );
    },
  },

  {
    accessorKey: "dynamics",
  header: "Динамика",
  cell: ({ row }) => {
    const value = row.getValue("dynamics") as string;
    return (
      <div className="flex items-center gap-1">
        {arrowIcon(value)}
        <span>{value}</span>
      </div>
    );
  },
},

    {
    accessorKey: "credits1",
    header: "Кредиты",
    cell: ({ row }) => {
      const value = row.getValue("credits1") as number
      const percnt = calculatePercent(value, TARGET.credits1);
      return (
        <div className="flex items-center gap-1"> 
          <Progress value={calculatePercent(value, TARGET.credits1)} />
          <span>{TARGET.credits1 > 0 ? (Math.floor((value / TARGET.credits1) * 100)) :0}%</span>
        </div>
      )
    },
  },
    {
    accessorKey: "credits2",
    header: "Кредиты",
    cell: ({ row }) => {
      const value = row.getValue("credits2") as number
      return (
      <div className="flex items-center gap-1"> 
          <Progress value={calculatePercent(value, TARGET.credits2)} />
          <span>{TARGET.credits2 > 0 ? (Math.floor((value / TARGET.credits2) * 100)) :0}%</span>
        </div>
      )
    },
  },
    {
    accessorKey: "deposits",
    header: "Депозиты",
    cell: ({ row }) => {
      const value = row.getValue("deposits") as number
      return (
        <div className="flex items-center gap-1"> 
          <Progress value={calculatePercent(value, TARGET.deposits)} />
          <span>{TARGET.deposits > 0 ? (Math.floor((value / TARGET.deposits) * 100)) :0}%</span>
        </div>
      )
    },
  },
    {
    accessorKey: "cards",
    header: "Карты",
    cell: ({ row }) => {
      const value = row.getValue("cards") as number
      return (
        <div className="flex items-center gap-1"> 
          <Progress value={calculatePercent(value, TARGET.cards)} />
          <span>{value}</span>
        </div>
      )
    },
  },
    {
    accessorKey: "ibfl",
    header: "ИБФЛ",
    cell: ({ row }) => {
      const value = row.getValue("ibfl") as number
      return (
        <div className="flex items-center gap-1"> 
          <Progress value={calculatePercent(value, TARGET.ibfl)} />
          <span>{TARGET.ibfl > 0 ? (Math.floor((value / TARGET.ibfl) * 100)) :0}%</span>
        </div>
      )
    },
  },

  {
  accessorKey: "period",
  header: "Период",
}
]