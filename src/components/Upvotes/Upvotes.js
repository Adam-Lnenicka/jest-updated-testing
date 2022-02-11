import React, { useState } from "react";

export default function Upvotest() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <div id="count">Upvotes: {count}</div>
      <button onClick={handleCount}>UPVOTE</button>
    </div>
  );
}
