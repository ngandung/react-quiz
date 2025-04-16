import { useReducer } from "react";

function reducer(state, action) {
  console.log(state);
  // state is current state value
  // action is new value and it can be an object to computing a new value in this function

  switch(action.type) {
    case 'dec':
      return {...state, count: state.count - state.step};
    case 'inc':
      return {...state, count: state.count + state.step};
    case 'isCount':
      return {...state, count: action.payload};
    case 'setStep':
      return {...state,count: state.count * action.payload, step: action.payload};
    case 'reset':
      return {count: 0, step: 1};
    default:
      throw new Error('Unknown action');
  }

}

function DateCounter() {
  //reducer is function and 0 is initial state
  const initialState = { count: 0, step: 1 };
  const [state, dispatch] = useReducer(reducer, initialState);
  

  //destructering state, so I can imidiately write 'count' or 'step' instead of 'state.count' or 'state.step'
  const { count, step } = state;

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({ type: "dec" });
  };

  const inc = function () {
    dispatch({ type: "inc" });
  };

  const defineCount = function (e) {
    dispatch({ type: "isCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  };

  const reset = function () {
    dispatch({ type: "reset" });
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
