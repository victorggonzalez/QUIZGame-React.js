import React from 'react';

//Clase creada para comprobar si las respuestas son correctas o erroneas y sacar un mensaje por pantalla
export default class Check extends React.Component{

  render(){
    //Comprueba que el juego ha finalizado, que las respuesta existe y que es igual que la esperada.
    //En ese caso devolvera un mensaje de acierto
    let check = ((this.props.finished)&&(typeof this.props.question.userAnswer !== "undefined")&&(this.props.question.answer.trim().toUpperCase()===this.props.question.userAnswer.trim().toUpperCase())) ?
    <h1 style={{color: 'green'}}>Correct answer! :)</h1>:<div/>

    //Comprueba que el juego ha finalizado, que las respuesta existe y que es distinta que la esperada, y por otro lado
    //comprueba que el juego ha finalizado y que la respuesta no existe.
    //En este caso devolvera un mensaje de acierto
    let wrong = (((this.props.finished)&&(typeof this.props.question.userAnswer !== "undefined")&&(this.props.question.answer.trim().toUpperCase()!==this.props.question.userAnswer.trim().toUpperCase())
  ) || ((this.props.finished)&&(typeof this.props.question.userAnswer === "undefined"))) ?
    <h1 style={{color: 'red'}}>Wrong answer :(</h1>:<div/>


    return(
      <div style={{textAlign: 'center'}}>
      <p>{check}{wrong}</p>
      </div>
    );
  }
}
