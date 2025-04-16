export default function Progress({currQuestion, totalQuestion, points, maxPoints, answer}) {

    return <header className="progress">
        <progress max={totalQuestion} value={currQuestion + Number(answer !== null)} />
        <p>Question <strong>{currQuestion + 1}</strong> / {totalQuestion}</p>
        <p><strong>{points}</strong> / {maxPoints}</p>
    </header>
}