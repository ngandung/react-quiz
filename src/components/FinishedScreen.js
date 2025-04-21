function FinishedScreen({ points, maxPoints, highscore, dispatch }) {
  const persentage = (points / maxPoints) * 100;
  
  let emoji;

  if(persentage === 100) emoji = "🥇";
  if(persentage >= 80 && persentage < 100) emoji = "🥈";
  if(persentage >= 50 && persentage < 80) emoji = "🥉";
  if(persentage >= 0 && persentage < 50) emoji = "😑";
  if(persentage === 0) emoji = "🤣";

  return (
    <>
    <p className="result">
      <span>{emoji}</span>You scored <strong>{points}</strong> out of {maxPoints} (
      {Math.ceil(persentage)}%)
    </p>
    <p className="highscore">(highscore: {highscore} points)</p>
    <button className="btn btn-ui" onClick={() => dispatch({type: 'restart'})}>Restart Quiz</button>
    </>
  );
}

export default FinishedScreen;
