import React from 'react';

export default class Question extends React.Component{

  render(){
    return(
      <div className="Question">
        <h3><p>{this.props.question.question}</p></h3>
        </div>
    );
  }


}
