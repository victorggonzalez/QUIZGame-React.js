import React from 'react'

export default class Image extends React.Component {
    render(){
        return(


              <div>
              <div class="col-4"  key="Image" className="Image">
                <span class="image right">
                  <img src={this.props.question.attachment.url}/>
                </span>
              </div>
              </div>

        )
    }
}
