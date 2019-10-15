import React from 'react';
import Button from './Button';
import Score from './Score';



export default class Actionbar extends React.Component{


  constructor(props){
		super(props);

	}




  render(){
    let score = (this.props.finished) ?
    <Score score={this.props.score}/> : <button class="button fit disabled">Check score</button>
    return(
      <div class="box">
      <div key="Actionbar" className="Actionbar" class="row">
        <div class="col-4">
            <Button buttonName="Previous" currentQuestion={this.props.currentQuestion} function={ () => {
						if (this.props.currentQuestion!==0){
							return this.props.onChangeQuestion(this.props.currentQuestion-1);
						}else{
							return;
						}}}/>
        </div>
        <div class="col-4">
			     <Button buttonName="Submit" questions={this.props.questions} finished={this.props.finished} function={ () => {
            return this.props.onSubmit(this.props.questions);
            }}/>
            <p></p>
            {score}



        </div>
        <div class="col-4">
          <Button buttonName="Next" currentQuestion={this.props.currentQuestion}   function={ () => {
						if (this.props.currentQuestion === (this.props.questions.length-1)){
							return;
						}else{
							return this.props.onChangeQuestion(this.props.currentQuestion+1);
						}}}/>
        </div>
      </div>

      </div>



  			);
  	}
  }
