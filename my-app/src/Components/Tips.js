import React from 'react';

export default class Tips extends React.Component {
	constructor(props){
		super(props);

	}


  showTips(question){
    if(question.tips.length !== 0){
      return (
        <div className="Tips">
          <h1><li>Tips:</li></h1>
          <ul>
            {this.props.question.tips.map((tip,id)=>{
			           return (
                   <li>
                   {tip}
                   </li>
                 );})}
          </ul>
        </div>
        );
    } else {return(
      <h1><li><i>No tips available yet</i></li></h1>

    );}

	}




	render() {

      return this.showTips(this.props.question);

	}
}
