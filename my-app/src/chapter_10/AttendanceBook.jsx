import React from "react"

const students = [
  { id: 1, name: "Inje" },
  { id: 2, name: "Steve" },
  { id: 3, name: "Bill" },
  { id: 4, name: "Jeff" }
]

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((s) => {
        return <li key={s.id}>{s.name}</li>
        // return <li key={`student-id-${s.id}`}>{s.name}</li>
      })}
      {/* {students.map((s, idx) => {
        // return <li key={`student-id-${s.id}`}>{s.name}</li>
        return <li key={idx}>{s.name}</li>
      })} */}
    </ul>
  )
}

export default AttendanceBook