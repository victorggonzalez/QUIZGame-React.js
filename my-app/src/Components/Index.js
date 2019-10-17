import React from 'react';


//Componente que muestra un dropdown menu con las preguntas, para acceder directamente a la pregunta elegida. 
export default class Index extends React.Component{

  render() {
    return(
      <div class="dropdown-content" >
      <section class="buttonBox">

        <button class="buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(0);
        }}>1</button><p/>
        <button class=" buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(1);
        }}>2</button><p/>
        <button class=" buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(2);
        }}>3</button><p/>
        <button class=" buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(3);
        }}>4</button><p/>
        <button class=" buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(4);
        }}>5</button><p/>
        <button class=" buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(5);
        }}>6</button><p/>
        <button class=" buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(6);
        }}>7</button><p/>
        <button class=" buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(7);
        }}>8</button><p/>
        <button class=" buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(8);
        }}>9</button><p/>
        <button class=" buttonIndex"  onClick={()=> {
          return this.props.onChangeQuestion(9);
        }}>10</button><p/>
        </section>
        </div>

      );
  }
}
