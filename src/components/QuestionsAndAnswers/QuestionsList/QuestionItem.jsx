import React from 'react';
import style from '../style.css';


class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  click = () => {
    console.log('click')
  }

  render() {

    let body, ans, help;
    let ansArray = [];
    let sArray = [];

    if (this.props.info !== undefined) {
      let { question_body, answers, question_helpfulness } = this.props.info;
      body = question_body;
      help = question_helpfulness;
      for (const key in answers) {
        ansArray.push(answers[key]);
      }
      sArray = ansArray.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      })

      //rendering for accordion list
      if (this.props.view) {
        ans = sArray.slice(0, 2).map((answer) => (
          <div className="answers" key={Math.random()}>
            <h5>{answer.body}</h5>
            <div className="bottom_line">
              <h5 >by:{answer.answerer_name}</h5>
              <h5>date:{answer.date}</h5>
              <h5 onClick={this.click}>Helpful? Yes {answer.helpfulness}</h5>
            </div>
          </div>
        ))
      } else {
        ans = sArray.map((answer) => (
          <div className="answers" key={Math.random()}>
            <h5>{answer.body}</h5>
            <div className="bottom_line">
              <h5>by:{answer.answerer_name}</h5>
              <h5 onClick={this.click}>Helpful? Yes {answer.helpfulness}</h5>
              <h5>date:{answer.date}</h5>
            </div>
          </div>
        ))
      }
    } else {
      body = ''
    }

    return (
      <div className="tile">
        <div className="first_line">
          <h3>Q:{body}</h3><h5 onClick={this.click}>Helpful? Yes {help}</h5><button>add answer</button>
        </div>
        <div>A:{ans}</div>
      </div>
    )
  }
}

export default QuestionItem;