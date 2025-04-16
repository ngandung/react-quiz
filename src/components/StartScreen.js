export default function StartScreen({totalQuestion = 0, dispatch}) {
    return <div className="start">
        <h2>Welcome to The React Quiz</h2>
        <h3>{totalQuestion} question to test your react mastery</h3>
        <button className="btn" onClick={() => dispatch({type: 'start'})}>Let's start</button>
    </div>
}