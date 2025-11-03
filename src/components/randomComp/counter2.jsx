import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [count]);

  return <h1 className="text-center">{count}</h1>;
}
