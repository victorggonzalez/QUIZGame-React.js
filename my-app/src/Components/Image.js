import React from 'react'

export default class Image extends React.Component {
    render(){
      let image = (this.props.question.attachment.url !== null ) ?
        <img src={this.props.question.attachment.url} style={{width: '100%'}} alt="Imagen de la pregunta"/>:
        <img src="https://www.freeiconspng.com/uploads/spinner-icon-0.gif"  alt="Funny image" class="error"/>
        return(


              <div>
              <div key="Image" className="Image">
                <span class="image fit" width="150">
                {image}
                </span>
              </div>
              </div>

        )
    }
}
