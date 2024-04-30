import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({value}) => {


    const [ counter, setCounter ] = useState(value)

    

const handleAdd = () =>{
    setCounter(counter + 1)
}

const handleMinus = () =>{
    setCounter(counter - 1)
}

const handleReset = () =>{
    setCounter(value = 0)
}








  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
    <button onClick={handleAdd}>
        Plus
    </button>

    <button onClick={handleMinus}>Minus</button>
    <button onClick={handleReset}>Reset</button>

    
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number
};
