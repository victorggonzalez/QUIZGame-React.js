import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {questionAnswer} from './redux/actions';
import {changeQuestion} from './redux/actions';
import {initQuestions} from './redux/actions';
import {submit} from './redux/actions';
import {timer} from './redux/actions';



import Game from './Components/Game.js';
import Navbar from './Components/Navbar.js';


function mapStateToProps(state){
  return{    ...state};
}

function App(props){
/*componentDidMount(){
  let url = "https://quiz.dit.upm.es/api/quizzes/random10wa?token=b61cccee4c3c81170f14"

  fetch(url)
      .then(res => res.json())
      .then(json => {
        props.dispatch(initQuestions(json))})
      .catch(error => {
        console.log(error);
      });

      var interval = setInterval(() =>{
            props.dispatch(timer(props.timer-1));
            if (props.timer===0){
                return;
            }

        },1000);

}*/




  console.log(props);
  //Comprueba que el array de preguntas esta completo
  let game = (props.questions.length == 10) ?
  <Game questions={props.questions}
      question={props.questions[props.currentQuestion]}
      currentQuestion={props.currentQuestion}
      onQuestionAnswer={(answer) =>{props.dispatch(questionAnswer(props.currentQuestion, answer))}}
      onChangeQuestion={(nextQuestion)=>{props.dispatch(changeQuestion(nextQuestion))}}
      onInitQuestions={(questions)=>props.dispatch(initQuestions(props.questions))}
      onResetQuestions={(questions)=>props.dispatch(initQuestions(props.questions))}
      onSubmit={(questions)=>props.dispatch(submit(questions))}
      score={props.score}
      finished={props.finished}
      timer={props.timer}
       /> : <h2>ERROR! Not enough questions</h2>
  return (
    <div className="App">
      <Navbar questions={props.questions}
      />
      {game}
    </div>
  );
}




export default connect(mapStateToProps)(App);
