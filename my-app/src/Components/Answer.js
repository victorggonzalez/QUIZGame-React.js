import React from 'react';
import Check from './Check'

export default class Answer extends React.Component{

//funcion que impide escribir una vez que ha finalizado el juego
  disableAnswer(finished){
    if(finished === true){
      return true;
    }
  }
  render(){

    return(
      <div style={{paddingLeft: '0cm'}}>
        <input type="text" placeholder="Type your answer here"  disabled={this.disableAnswer(this.props.finished)} value={this.props.question.userAnswer || ''}
          onChange={(e)=>{
            this.props.onQuestionAnswer(e.target.value);}}/>

      </div>
    );
  }
}
