import React from "react";
import { useState } from "react";

function useCounter(initVal) {
  const [count, setCount] = useState(initVal)
  const increaseCount = () => setCount((count) => count + 1)
  const decreaseCount = () => setCount((count) => Math.max(count - 1, 0))
  return [count, increaseCount, decreaseCount]
}

export default useCounter