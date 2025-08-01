import { faker, Faker } from "@faker-js/faker"
import { EmployeePerformance } from "./EmployeeTypes"
import { useEffect } from "react";

export async function getEmployeeData(): Promise<EmployeePerformance[]> {
  const res = await fetch("http://localhost:3000/api/employees")
  if (!res.ok) throw new Error("Failed to fetch employee data")
    // tut nahodyatsya dannye s backenda

  return res.json()
}




// from FakerJS