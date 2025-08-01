import { faker, Faker } from "@faker-js/faker"
import { EmployeePerformance } from "./EmployeeTypes"
import { useEffect } from "react";

export async function getEmployeeData(): Promise<EmployeePerformance[]> {
    // Kostyl but who caresss
    const periods = ["Week", "Month", "Year"];
    const fakePic = faker.image.avatarGitHub();

  return Array.from({ length: 20 }, () => ({
    
    pic: fakePic,
    employee: faker.person.fullName(),
    rating: parseFloat((Math.random() * 5).toFixed(1)),
    dynamics: `${faker.number.int({min: 0, max: 99})}%`,
    credits1: faker.number.int({ min: 5000, max: 20000 }),
    credits2: faker.number.int({ min: 4000, max: 15000 }),
    deposits: faker.number.int({ min: 1000, max: 10000 }),
    cards: faker.number.int({ min: 0, max: 5 }),
    ibfl: faker.number.int({ min: 100, max: 1000 }),
    period: periods[Math.floor(Math.random() * periods.length)],
  }))
}



// from FakerJS