// pages/api/employees.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import { faker } from '@faker-js/faker'
import { EmployeePerformance } from '../../../../bank-app/src/data/EmployeeTypes'

const employees: EmployeePerformance[] = [
  {
    pic: faker.image.avatarGitHub(), // random GitHub avatar
    employee: "Alice Johnson",
    rating: 4.5,
    dynamics: "10%",
    credits1: 12000,
    credits2: 8000,
    deposits: 4500,
    cards: 2,
    ibfl: 300,
    period: "Month",
  },
  {
    pic: faker.image.avatarGitHub(),
    employee: "Bob Smith",
    rating: 3.8,
    dynamics: "5%",
    credits1: 9000,
    credits2: 5000,
    deposits: 3000,
    cards: 1,
    ibfl: 220,
    period: "Week",
  },
  {
    pic: faker.image.avatarGitHub(),
    employee: "Clara Lee",
    rating: 4.9,
    dynamics: "15%",
    credits1: 15000,
    credits2: 9000,
    deposits: 6000,
    cards: 3,
    ibfl: 450,
    period: "Year",
  },
  // add more employees if needed
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmployeePerformance[]>
) {
  res.status(200).json(employees)
}
