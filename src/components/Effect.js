import { useState, useEffect } from "react";

const Effect = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  return <h2>useEffect Example: {time.toLocaleTimeString()}</h2>;
};

export default Effect;