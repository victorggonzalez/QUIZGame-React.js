import React from 'react';

export default class Button extends React.Component {
	constructor(props){
		super(props);
		this.disableButton=this.disableButton.bind(this);
	}


  disableButton(index){
		switch (this.props.buttonName) {
			case "Previous":
				if(index===0){
					return true;
				}else {
					return false;
				}
			case "Next":
				if(index === 9){
					return true;
				}else {
					return false;
				}
			default:
				return false;
		}
	}

	disableAll(finished){
		if(finished === true){
			return true;
		}
	}




	render() {
		return(
      <button class="button special fit" disabled={this.disableButton(this.props.currentQuestion) || this.disableAll(this.props.finished)}  onClick={this.props.function}>{this.props.buttonName}</button>
				);
	}
}
