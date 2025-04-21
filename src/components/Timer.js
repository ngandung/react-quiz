import { useEffect } from "react";

export default function Timer({dispatch, secondsRemaining}) {
  const minute = Math.floor(secondsRemaining / 60);
  const second = secondsRemaining % 60;

  useEffect(function(){
    const id = setInterval(function(){
      dispatch({type: "tick"});
    },1000);

    return () => clearInterval(id);
  },[dispatch]);

  return (
    <div className="timer">
      {minute < 10 && "0"}{minute} : {second < 10 && "0"} {second}
    </div>
  );
}