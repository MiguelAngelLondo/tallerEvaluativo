import { useState } from "react";

export const N4 = () => {
  const [count, setCount] = useState(0);
  const [off, on] = useState(); 

  const matching = (x) => {
    if (x === true) {
        const id = setInterval(() => {
        setCount((prevCount) => prevCount + 1); 
      }, 1000);
      on(id); 
    } else {
      clearInterval(off); 
      setCount(0); 
    }
  };

  return (
    <>
    <div className="counter">
      <button onClick={() => matching(true)}>Start</button>
      <button onClick={() => matching(false)}>Stop</button>
      <h1>Running! Time: {count}</h1>
      <hr></hr>
      </div>
    </>
  );
};
