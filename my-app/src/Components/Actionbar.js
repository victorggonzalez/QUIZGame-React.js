import React from 'react';
import Button from './Button';

export default class Actionbar extends React.Component{

  render(){
    return(
      <div class="row">
      <div class="col-4">
      <a href="#" class="button special fit">Anterior</a>
      </div>
      <div class="col-4">
			<a href="#" class="button alt fit">Submit</a>
      </div>
      <div class="col-4">
      <a href="#" class="button special fit">Siguiente</a>
      </div>
      </div>
    );
  }


}
