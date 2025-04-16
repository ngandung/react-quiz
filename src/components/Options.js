export default function Options({
  option,
  answer,
  dispatch,
  index,
  correctAnswer,
}) {
  const hasAnswer = answer !== null;
  return (
    <button
      className={`btn btn-option ${index === answer ? "answer" : ""} ${
        hasAnswer ? index === correctAnswer ? "correct" : "wrong" : ''
      }`}
      onClick={() => dispatch({ type: "newAnswer", payload: index })}
      disabled={hasAnswer}
    >
      {option}
    </button>
  );
}
