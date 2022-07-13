import React from 'react';
import axios from 'axios';

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

    return (
      <div className="qAnswers" key={Math.random()}>
        <h5>A:  {answer.body}</h5>
        <div className="qBottom_line">
          <h5>by:{answer.answerer_name}</h5>
          <h5>date:{answer.date}</h5>
          <h5 onClick={this.incrementor}>Helpful? Yes ({answer.helpfulness})</h5><h5 onClick={() => { this.reportA(answer.id) }}>{this.state.reportA}</h5>
        </div>
      </div>
    )
  }
}

export default AnswerItem;