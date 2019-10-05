import React from 'react';

export default class Navbar extends React.Component{


function(){
  return this.props.onInitQuestions();
}

  render(){
    return(
      <header id="header" className="header">

        <h1><a href="index.html">QUIZ Game</a></h1>
      </header>

    );
  }


}
