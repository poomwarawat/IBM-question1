import "./App.css";
import React, { useState, useRef } from "react";

/**
 * This is main web application page
 * And css file is App.css
 */
function App() {
  const [intiger, setIntiger] = useState(0);
  const [select, setSelect] = useState(1);
  const [isPrimeState, setIsPrimeState] = useState(false);
  const [isFibo, setFibo] = useState(false);

  const inputRef = useRef();

  /**
   * This function using for receive event when input change
   * @param {*} e
   */
  const handleChangeIntiger = (e) => {
    let value = e.target.value;
    setIntiger(value);
  };

  /**
   * This function using round a number when mouse leave from input element
   * And when input is negitive will be replace to 1
   */
  const outMouseLeave = () => {
    if (parseFloat(intiger) < 0) {
      setIntiger(1);
      inputRef.current.value = 1;
      return;
    }
    const float = Math.round(intiger);
    setIntiger(float);
    inputRef.current.value = float;

    if (select === 1) {
      const prime = isPrime(Math.round(intiger));
      setIsPrimeState(prime);
      return;
    }
    if (select === 2) {
      const fibo = isFibonacci(intiger);
      setFibo(fibo);
      return;
    }
  };

  /**
   * This function using for set Show True or False when select change
   * @param {*} e
   * @returns
   */
  const handleSelectedChange = (e) => {
    const value = e.target.value;
    setSelect(parseInt(value));
    if (parseInt(value) === 1) {
      const prime = isPrime(intiger);
      setIsPrimeState(prime);
      return;
    }
    if (parseInt(value) === 2) {
      const fibo = isFibonacci(intiger);
      setFibo(fibo);
      return;
    }
  };

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  const isFibonacci = (num) => {
    return (
      isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
    );
  };
  const isPerfectSquare = (x) => {
    let s = parseInt(Math.sqrt(x));
    return s * s === x;
  };

  const showPrime = () => {
    return isPrimeState ? <h3>True</h3> : <h3>False</h3>;
  };

  const showFibo = () => {
    return isFibo ? <h3>True</h3> : <h3>False</h3>;
  };
  return (
    <div className="container">
      <div className="first-column border">
        <input
          type="text"
          placeholder="enter number"
          className="border"
          onChange={handleChangeIntiger}
          onMouseLeave={outMouseLeave}
          ref={inputRef}
        />
      </div>
      <div className="second-column border">
        <select id="method" onChange={handleSelectedChange}>
          <option value="1">isPrime</option>
          <option value="2">isFibonacci</option>
        </select>
      </div>
      <div className="third-column border">
        {select === 1 ? showPrime() : showFibo()}
      </div>
    </div>
  );
}

export default App;
