import React from 'react';

class AModal extends React.Component {
constructor(props){
  super(props);
  this.state = {

  }
}


render(){
  return (
    <div className="qModalBackground">
      <div className="qModalContainer">
        <button onClick={()=>{this.props.toggle()}}>X</button>
        <h5>Submit your Answer</h5>
        <form>
              <div>
                <label>Your Answer(mandatory)</label>
                <input type='text'></input>
              </div>
              <div>
                <label>What is your nickname(mandatory)</label>
                <input type='text' placeholder="Example: jack543!"></input>
              </div>
              <div>
                <p>For privacy reasons, do not use your full name or email address</p>
              </div>
              <div>
                <label>Your email(mandatory)</label>
                <input type='text' placeholder="Why did you like the product or not?"></input>
              </div>
              <div>
                <p>“For authentication reasons, you will not be emailed”</p>
              </div>
              <div>
                <label>Upload your photos</label>
                <button>upload photos here</button>
              </div>
              <div>
                <input type='submit'></input>
              </div>
            </form>
      </div>
    </div>
  )
}
}

export default AModal;