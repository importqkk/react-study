import React from "react";
import { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("여자")

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeGender = (e) => {
    setGender(e.target.value)
  }

  const handleSubmit = (e) => {
    alert(`이름: ${name}, 성별: ${gender}`)
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option selected value="여자">여자</option> 
          <option value="남자">남자</option>
        </select>
      </label>
      <button type="submit">제출</button>
    </form>
  )
}

export default SignUp