import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader"
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],
  //loading, error,ready, active, finished
  status: 'loading',
};

function reduce(state, action) {
  switch(action.type) {
    case 'dataReceived':
      return {...state, questions: action.payload, status: 'ready'};
    case 'dataFailed':
      return {...state, status: 'error'};
    case 'start':
      return {...state, status: 'active'};
    default:
      throw new Error('action is unknown');
  }
};

export default function App() {
  const [{questions, status}, dispatch] = useReducer(reduce, initialState);
  const totalQuestion = questions.length;
  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type: 'dataReceived', payload: data}))
      .catch((err) => dispatch({type: 'dataFailed'}));
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen totalQuestion={totalQuestion} dispatch={dispatch}/>}
        {status === 'active' && <Question />}
      </Main>
    </div>
  );
}
