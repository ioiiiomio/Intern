// pages/api/employees.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }


  const employees = [
    {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8h2c4yQKWRlQcwuLDyBPRezU0ZkOFedu9KQ&s',
      employee: "Alice Johnson",
      rating: 4.5,
      dynamics: "10%",
      credits1: 12000,
      credits2: 8000,
      deposits: 4500,
      cards: 2,
      ibfl: 30,
      period: "Month",
    },
        {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8h2c4yQKWRlQcwuLDyBPRezU0ZkOFedu9KQ&s',
      employee: "Alice Johnson",
      rating: 2.5,
      dynamics: "45%",
      credits1: 14000,
      credits2: 8000,
      deposits: 4500,
      cards: 3,
      ibfl: 310,
      period: "Month",
    },
        {
      pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8h2c4yQKWRlQcwuLDyBPRezU0ZkOFedu9KQ&s',
      employee: "Alice Johnson",
      rating: 4.3,
      dynamics: "90%",
      credits1: 34000,
      credits2: 3400,
      deposits: 4100,
      cards: 1,
      ibfl: 200,
      period: "Month",
    },
  ]

  res.status(200).json(employees)
}
