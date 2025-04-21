export default function NextButton({dispatch, answer, currQuestion, totalQuestion}) {

    if(answer === null) return;

    if(currQuestion+1 === totalQuestion) {
      return (
        <button className="btn btn-ui" onClick={() => dispatch({type:'finished'})} >Finish</button>
      );
    }
   
    return (
      <button className="btn btn-ui" onClick={() => dispatch({type:'nextQuestion'})} >Next</button>
    );
  }
  