import React from 'react';
import Button from './Button';



export default class Actionbar extends React.Component{


  constructor(props){
		super(props);

	}


  preFunction(){
    if (this.props.currentQuestion !=0){
              return this.props.onChangeQuestion(this.props.currentQuestion-1);
            }else{
              return;
            }
  }

  nextFunction(){
    if (this.props.currentQuestion===(this.questions.length-1)){
  							return;
  						}else{
  							return this.props.onChangeQuestion(this.props.currentQuestion+1);
  						}
  }

  render(){
    return(
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
			   <button href="#" class="button alt fit">Submit</button>
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



  			);
  	}
  }
