"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type EmployeePerformance = {
  employee: string
  rating: number | string
  dynamics: string
  credits1: number
  credits2: number
  deposits: number
  cards: number
  ibfl: number
}


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
]