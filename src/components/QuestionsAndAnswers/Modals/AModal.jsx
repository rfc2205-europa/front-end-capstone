import React from 'react';
import axios from 'axios';

class AModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: []
    }
  }

  //submits a Post for new answer
  submitA = (e) => {
    e.preventDefault()
    let { answer, nickname, email, photos } = this.state
    console.log('submit answer')
    //API call
    /// qa/questions/:question_id/answers
    if (answer && nickname && email) {
      axios.post(`http://localhost:3005/qa/questions`, {
        "type": "questions.answer",
        "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${this.props.questionId}/answers`,
        "body": answer,//string 1000 char
        "name": nickname,//string 60 char
        "email": email,//email format string 60 char
        "photos": photos//array of image urls
      })
        .then((res) => {
          console.log(res)
          this.props.toggle()
        })
        .catch((err) => {
          // this.setState({
          //   qWarningModalView: true
          // })
          //change to modal that lists empty fields
          console.log('There is an error in your post req in Answers Modal: ', err)
        })
    } else {
      alert("You must enter the following:")
    }
  }

  render() {
    return (
      <div className="qModalBackground">
        <div className="qModalContainer">
          <button onClick={() => { this.props.toggle() }}>X</button>
          <h5>Submit your Answer</h5>
          <p>{this.props.productName}:[Question Body]</p>
          <form>
            <div>
              <label>Your Answer*</label>
              <input type='text' onChange={(e) => { this.setState({ answer: e.target.value }) }}></input>
            </div>
            <div>
              <label>What is your nickname*</label>
              <input type='text' placeholder="Example: jack543!" onChange={(e) => { this.setState({ nickname: e.target.value }) }}></input>
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
              <label>Upload your photos</label>
              <button>upload photos here</button>
            </div>
            <div>
              <input type='submit' onClick={this.submitA}></input>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AModal;