import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const FunctionalCounter = () => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   // Вызовется при монтировании
  //   // Аналог componentDidMount
  // }, []);
  //
  // useEffect(() => {
  //   // Вызовется при изменении чего либо из массива зависимостей
  //   // Аналог componentDidUpdate
  // }, [count]);
  //
  // useEffect(() => {
  //   return () => {
  //     // При пустом массиве зависимосте Вызовется при размонтировании компонента
  //     // Аналог componentWillUnmount
  //   }
  // }, []);

  // const unMemoizedValue = someExpenciveCalc();
  //
  // const memoizedValue = useMemo(() => {
  //   return someExpenciveCalc();
  // }, []);

  // const memoizedCallback = useCallback(() => {
  //
  // }, []);

  // const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  //
  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, 1000);
  //   return () => {
  //     clearInterval(timerId);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (count !== 0 && !(count % 5)) {
  //     setCount2((prevCount) => prevCount + 1)
  //   }
  // }, [count]);

  const count = useCounter();
  const count2 = useCounter(5);

  return (
    <div>
      Hello I'm functions Counter -
      <span className="counter">{count}, {count2}</span>
      <br/>
      {/*Count2 - {count2}*/}
    </div>
  );
};

export default FunctionalCounter;
