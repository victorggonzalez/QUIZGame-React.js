import React from 'react';

//Clase creada para comprobar si las respuestas son correctas o erroneas y sacar un mensaje por pantalla
export default class Score extends React.Component{

  render(){



    return(
      <div>
      <a class="button  fit small" disabled={true} href="#popup1">Check score</a>
      <div id="popup1" class="overlay">
         <div class="popup"><h3>Your final score is {this.props.score}/10</h3>
         <a class="close" href="#">&times;</a>
           <div class="content"></div>
         </div>
     </div>
     </div>
    );
  }
}
