import React from 'react';
import Image from './Image';
import Question from './Question';
import Answer from './Answer';

export default class Content extends React.Component{

  render(){
    return(
        <div class="box">
        <div class="row">
          <div class="col-4">
            <div  key="Question" className="Question" text-align="center">

              <h3><p>{this.props.question.question}</p></h3>

            </div>
            <div  key="Answer" className="Answer">
                <input type="text"  placeholder="Responda aquí" value={this.props.question.userAnswer || ''}
                onChange={(e)=>{
                  this.props.onQuestionAnswer(e.target.value);}}/>
            </div>
          </div>

          <div class="col-4">
            <div  key="Image" className="Image">
              <span class="image fit">
                <img src={this.props.question.attachment.url} width="150"/>
              </span>
            </div>
          </div>
          <div class ="col-4">
              <ul>
                <h1><li>Tips: {this.props.question.tips}</li></h1>
                <h1><li>Author name: {this.props.question.author.username}</li></h1>
                <span class="image left">
                <img src={this.props.question.author.photo.url} width="150"/>
                </span>
                </ul>
        </div>
        </div>
        </div>

    );
  }


}
