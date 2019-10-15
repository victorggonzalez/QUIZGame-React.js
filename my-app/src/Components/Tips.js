import React from 'react';

export default class Tips extends React.Component {
	constructor(props){
		super(props);

	}


  showTips(question){
    if(question.tips.length !== 0){
      return (
        <div>
          <h1 >Tips:</h1>
          <ul style={{marginBottom: '10px', marginLeft: '60px'}}>
            {this.props.question.tips.map((tip,id)=>{
			           return (<li style={{textAlign: 'left', paddingLeft:'0px'}}>{tip}</li>
                 );})}
          </ul>
        </div>
        );
    } else {return(
			<h1><i>No tips available yet</i></h1>

    );}

	}




	render() {

      return this.showTips(this.props.question);

	}
}
