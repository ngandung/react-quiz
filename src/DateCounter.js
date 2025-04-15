import { useReducer, useState } from "react";

function reducer(state, action) {
  // state is current state value
  // action is new value and it can be an object to computing a new value in this function
  if(action.type === 'dec') return state - 1;
  if(action.type === 'inc') return state + 1;
  if(action.type === 'isCount') return action.payload;
  if(action.type === 'reset') return 0;
}

function DateCounter() {
  // const [count, setCount] = useState(0);

  //reducer is function and 0 is initial state
  const [count, dispatch] = useReducer(reducer, 0)

  const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    dispatch({type: 'dec'});
  };

  const inc = function () {
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
    dispatch({type: 'inc'});
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({type: 'isCount', payload: Number(e.target.value)});
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    // setCount(0);
    dispatch({type: 'reset'});
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
