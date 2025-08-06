import React, { useEffect, useState } from 'react'
import { getEmployeeData } from '../data/EmployeeData'
import { EmployeePerformance } from '../data/EmployeeTypes'

function EmployeeList() {
  const [data, setData] = useState<EmployeePerformance[]>([])

  useEffect(() => {
    getEmployeeData().then(setData).catch(console.error)
  }, [])

  return (
    <div>
      <h1>Employee Table</h1>
      <ul>
        {data.map((emp, i) => (
          <li key={i} className="flex items-center gap-4 mb-2">
            <img src={emp.pic} alt="avatar" className="w-10 h-10 rounded-full" />
            <span>{emp.employee} — Rating: {emp.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EmployeeList
