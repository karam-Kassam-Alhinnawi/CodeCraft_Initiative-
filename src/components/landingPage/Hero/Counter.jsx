import React, { useEffect, useState } from 'react'

const Counter = ({target}) => {
  const [counter, setCounter] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const step = target / steps;
    let current = 0;

  const timer = setInterval(() => {
    current += step;
    if(current >= target){
        setCounter(target);
        clearInterval(timer)
    } else{
        setCounter(Math.floor(current));}
    }, duration / steps)

    return() => clearInterval();

  }, [target]);

  return <span>{counter}+</span>
}

export default Counter