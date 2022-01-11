import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <h1>Current Count: {count}</h1>
    </div>
  );
};

export default Counter;
