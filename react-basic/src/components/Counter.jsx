import React from 'react'

const Counter = ({increment}) => {
    console.log("render edildi");
    return (
      <>
      <button onClick={increment}>increment</button>
      </>
    );
  }
  
  export default React.memo(Counter);
