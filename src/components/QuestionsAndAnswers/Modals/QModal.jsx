import React from 'react';

class QModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div className="qModalBackground">
        <div className="qModalContainer">
          <button onClick={() => { this.props.toggle() }}>X</button>
          <h5>Ask Your Question</h5>
          <p>[Product Name]</p>
          <div>
            <form>
              <div>
                <label>Your Question(mandatory)</label>
                <input type='text'></input>
              </div>
              <div>
                <label>What is your nickname(mandatory)</label>
                <input type='text' placeholder="Example: jackson11!"></input>
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
                <input type='submit'></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default QModal;