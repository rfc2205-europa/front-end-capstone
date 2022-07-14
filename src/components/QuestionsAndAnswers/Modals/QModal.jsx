import React from 'react';
import axios from 'axios';
//import QWarningModal from './QWarningModal.jsx'

class QModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qWarningModalView: false
    }
  }

  //sends post req to server for adding a question
  submitQ = (e) => {
    e.preventDefault()
    console.log('submit')
    //API call
    // POST /qa/questions
    axios.post(`http://localhost:3005/qa/questions`, {
        "type": "questions.question",
        "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions`,
        "body": this.state.question,//string 1000 char
        "name": this.state.nickname,//string 60 char
        "email": this.state.email,//email format string 60 char
        "product_id": parseInt(this.props.productId)//66680//must be number
    })
      .then((res) => {
        console.log(res)
        this.props.toggle()
      })
      .catch((err) => {
        // this.setState({
        //   qWarningModalView: true
        // })
        alert("You must enter the following:")//change to modal that lists empty fields
        console.log('There is an error in your post req in Questions Modal: ', err)
      })
  }

  render() {
    return (
      <div className="qModalBackground">
        <div className="qModalContainer">
          {/* {this.state.qWarningModalView && <QWarningModal/>} */}
          <button onClick={() => { this.props.toggle() }}>X</button>
          <h5>Ask Your Question</h5>
          <p>{this.props.productName}</p>
          <div>
            <form>
              <div>
                <label>Your Question*</label>
                <input type='text' onChange={(e) => { this.setState({ question: e.target.value }) }}></input>
              </div>
              <div>
                <label>What is your nickname*</label>
                <input type='text' placeholder="Example: jackson11!" onChange={(e) => { this.setState({ nickname: e.target.value }) }}></input>
              </div>
              <div>
                <p>For privacy reasons, do not use your full name or email address</p>
              </div>
              <div>
                <label>Your email*</label>
                <input type='text' placeholder="Why did you like the product or not?" onChange={(e) => { this.setState({ email: e.target.value }) }}></input>
              </div>
              <div>
                <p>“For authentication reasons, you will not be emailed”</p>
              </div>
              <div>
                <input type='submit' onClick={this.submitQ}></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default QModal;