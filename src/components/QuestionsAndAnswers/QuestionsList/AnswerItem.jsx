import React from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

class AnswerItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      helpfulA: true,
      reportA: 'Report',
      reportABool: true
    }
  }


  //handles helpful answer click
  helpfulA = (id) => {
    console.log('helpful answer')

    // /qa/answers/:answer_id/helpful
    axios.put(`http://localhost:3005/qa/answers`, {
      "type": "answer",
      "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${id}/helpful`
    })
      .then((res) => {
        console.log('response in client from server after report answer: ', res)
        this.setState({
          helpfulA: false
        })
      })
      .catch((err) => {
        console.log('ERROR IN PUT Helpful Answer: ', err)
      })


    //this.setState({ helpfulA: false })
  }

  //handles report answer click
  reportA = (id) => {
    console.log('report answer')
    if (this.state.reportABool) {
      axios.put(`http://localhost:3005/qa/answers`, {
        "type": "answer",
        "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${id}/report`
      })
        .then((res) => {
          console.log('response in client from server after report answer: ', res)
          this.setState({
            reportA: 'Reported',
            reportABool: false
          })
        })
        .catch((err) => {
          console.log('ERROR IN PUT Helpful Question: ', err)
        })
    }
  }

  //limiter single attempt at helpful answers
  incrementor = () => {
    if (this.state.helpfulA) {
      this.helpfulA(this.props.answer.id)
      this.props.answer.helpfulness++;
    }
  }

  render() {
    let { answer } = this.props
    let formatDate = format(parseISO(answer.date), "LLLL, dd, yyyy")
    return (
      <div className="qAnswers" key={Math.random()}>
        <div className="qAnswerLine1">
          <h5 className="qw12B">A:</h5>
          <h5 className="qw12"> {answer.body}</h5>
        </div>
        <ul class="qABottom_line">
          <li><a>by {answer.answerer_name}, {formatDate}</a></li>
          <li><a>|</a></li>
          <li><a>Helpful?</a></li>
          <li><a className="qw10Underline" onClick={this.incrementor}>Yes ({answer.helpfulness})</a></li>
          <li><a>|</a></li>
          <li><a className="qw10Underline" onClick={() => { this.reportA(answer.id) }}>{this.state.reportA}</a></li>
        </ul>
      </div>
    )
  }
}

export default AnswerItem;