import Options from "./Options";

export default function Question({ question, answer, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((q, index) => (
          <Options
            option={q}
            index={index}
            key={q}
            answer={answer}
            dispatch={dispatch}
            correctAnswer={question.correctOption}
          />
        ))}
      </div>
    </div>
  );
}
