import React from 'react';
import axios from 'axios';
import cf from '../../../../config.js';

class AModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      nickname: '',
      email: '',
      photos: [],
    };
  }

  // validates props
  // static propTypes = {
  //   productName: PropTypes.string.isRequired,
  //   questionBody: PropTypes.string.isRequired,
  // };

  // submits a Post for new answer
  submitA = (e) => {
    e.preventDefault();
    const {answer, nickname, email, photos} = this.state;
    console.log('submit answer');
    // API call
    // qa/questions/:question_id/answers
    if (answer && nickname && email) {
      axios.post(`${cf.ip}/qa/questions`, {
        'type': 'questions.answer',
        'api': `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${this.props.questionId}/answers`,
        'body': answer, // string 1000 char
        'name': nickname, // string 60 char
        'email': email, // email format string 60 char
        'photos': photos, // array of image urls
      })
          .then((res) => {
            console.log(res);
            this.props.toggle();
            this.props.fetch('66655');
          })
          .catch((err) => {
            console.log('There is an error in your post Answers Modal: ', err);
          });
    } else {
      let string = 'Warning! You must enter the following: ';
      if (answer === '') {
        string += ' answer';
      }
      if (nickname === '') {
        string += ' nickname';
      }
      if (email === '') {
        string += ' email';
      }
      alert(string);
    }
  };

  render() {
    return (
      <div className="qModalBackground">
        <div className="qModalContainer">
          <div className="qModalButtonPos">
            <button className="qQAButton" onClick={() => {
              this.props.toggle();
            }}>X</button>
          </div>
          <h5>Submit your Answer</h5>
          <p>{this.props.productName}: {this.props.questionBody}</p>
          <form>
            <div>
              <label>Your Answer*</label>
              <textarea className="qAModalForm1" type='text' onChange={(e) => {
                this.setState({answer: e.target.value});
              }}></textarea>
            </div>
            <div>
              <label>What is your nickname*</label>
              <input className="qAModalForm2" type='text' placeholder="Example: jack543!" onChange={(e) => {
                this.setState({nickname: e.target.value});
              }}></input>
            </div>
            <div>
              <p>For privacy reasons, do not use your full name or email address</p>
            </div>
            <div>
              <label>Your email*</label>
              <input className="qAModalForm3" type='text' placeholder="Why did you like the product or not?" onChange={(e) => {
                this.setState({email: e.target.value});
              }}></input>
            </div>
            <div>
              <p>For authentication reasons, you will not be emailed</p>
            </div>
            {/* <div>
              <label>Upload your photos</label>
              <button>upload photos here</button>
            </div> */}
            <div>
              <input className="qButton" type='submit' onClick={this.submitA}></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AModal;
