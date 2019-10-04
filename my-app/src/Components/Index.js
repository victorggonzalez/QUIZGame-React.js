import React from 'react';
import Content from './Content';
import Button from './Button';

export default class Index extends React.Component{

  showQuestion(index){
		switch (this.props.buttonName) {
			case "1":
				return this.props.onChangeQuestion(0);
        case "5":
  				return this.props.onChangeQuestion(5);
			default:
				return false;
		}
	}



  render() {
    return(
        <div>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(0);
        }}>1</button><p/>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(1);
        }}>2</button><p/>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(2);
        }}>3</button><p/>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(3);
        }}>4</button><p/>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(4);
        }}>5</button><p/>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(5);
        }}>6</button><p/>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(6);
        }}>7</button><p/>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(7);
        }}>8</button><p/>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(8);
        }}>9</button><p/>
        <button class="button special fit"  onClick={()=> {
          return this.props.onChangeQuestion(9);
        }}>10</button><p/>

        </div>

      );
  }
}
