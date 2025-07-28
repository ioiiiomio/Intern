"use client"

import { ColumnDef } from "@tanstack/react-table"
import { EmployeePerformance } from "../../../data/EmployeeTypes"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


export const columns: ColumnDef<EmployeePerformance>[] = [

  {
    accessorKey: "employee",
    header: "Сотрудник",

  },

  {
    accessorKey: "rating",
    header: "Рейтинг",
  },
  {
    accessorKey: "dynamics",
    header: "Динамика",
  },
    {
    accessorKey: "credits1",
    header: "Кредиты",
  },
    {
    accessorKey: "credits2",
    header: "Кредиты",
  },
    {
    accessorKey: "deposits",
    header: "Депозиты",
  },
    {
    accessorKey: "cards",
    header: "Карты",
  },
    {
    accessorKey: "ibfl",
    header: "ИБФЛ",
  },

  {
  accessorKey: "period",
  header: "Период",
}
]