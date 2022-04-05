import { useState, useEffect } from "react";

export function TimeOnPage() {
  const [countTime, setCountTime] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCountTime((previous) => previous + 1);
    }, 1000);
  }, [countTime]);

  return <p>You have used {countTime} Seconds on this website</p>;
}
