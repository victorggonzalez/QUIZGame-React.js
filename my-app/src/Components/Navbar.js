import React from 'react';

export default class Navbar extends React.Component{

  render(){
    return(
      <header id="header" className="header">

        <h1><a href="index.html">QUIZ Game</a></h1>
        <img src={this.props.logo}/>
      </header>
    );
  }


}
