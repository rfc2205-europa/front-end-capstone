import React from 'react';
import axios from 'axios';
//import style from '../style.css';


class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulA: true,
      helpfulQ: true,
      report: true
    }
  }

  //handles helpful question click
  helpfulQ = () => {
    console.log('helpful question')
    //send put req to server once per load
    if (this.state.helpfulQ) {
      let { question_id } = this.props.info;
      axios.put(`http://localhost:3005/qa/questions`, {
        "type": "question",
        "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}/helpful`
      })
        .then((res) => {
          console.log(res)
          this.props.fetch();
        })
        .catch((err) => {
          console.log('ERROR IN PUT Helpful Question: ', err)
        })
    }

    this.setState({ helpfulQ: false })

  }

  //handles helpful answer click
  helpfulA = (id) => {
    console.log('helpful answer')

    // /qa/answers/:answer_id/helpful
    if (this.state.helpfulA) {
      axios.put(`http://localhost:3005/qa/answers`, {
        "type": "answer",
        "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${id}/helpful`
      })
        .then((res) => {
          console.log(res)
          this.props.fetch()
        })
        .catch((err) => {
          console.log('ERROR IN PUT Helpful Answer: ', err)
        })
    }

    this.setState({ helpfulA: false })
  }

  //handles report question click
  reportQ = () => {
    console.log('report question')
    //qa/questions/:question_id/report
    //send put req to server once per load
    //render button label onclick

    // let { question_id } = this.props.info;
    // axios.put(`http://localhost:3005/qa/questions`, {
    //   "type": "question",
    //   "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}/report`
    // })
    //   .then((res) => {
    //     console.log(res)
        this.props.fetch();
      // })
      // .catch((err) => {
      //   console.log('ERROR IN PUT Helpful Question: ', err)
      // })

    //this.setState({report: false})
  }

  //handles report answer click
  reportA = () => {
    console.log('report answer')
    //this.setState({report: false})
  }

  render() {

    let body, ans, help;
    let ansArray = [];
    let sArray = [];
    let reportButtonLabel = 'Report'

    if (this.props.info !== undefined) {
      let { question_body, answers, question_helpfulness } = this.props.info;
      body = question_body;
      help = question_helpfulness;

      //sorts obj data into array
      for (const key in answers) {
        ansArray.push(answers[key]);
      }

      //sort list by helpfulness
      sArray = ansArray.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      })

      //rendering for accordion list
      let list;
      if (this.props.view) {
        list = sArray.slice(0, 2)
      } else {
        list = sArray
      }
      ans = list.map((answer) => (
        <div className="answers" key={Math.random()}>
          <h5>{answer.body}</h5>
          <div className="bottom_line">
            <h5>by:{answer.answerer_name}</h5>
            <h5>date:{answer.date}</h5>
            <h5 onClick={() => { this.helpfulA(answer.id) }}>Helpful? Yes ({answer.helpfulness})</h5><h5 onClick={this.reportA}>Report</h5>
          </div>
        </div>
      ))
    } else {
      body = ''
    }

    return (
      <div className="tile">
        <div className="first_line">
          <h3>Q:{body}</h3><h5 onClick={this.helpfulQ}>Helpful? Yes ({help})</h5><h5 onClick={this.reportQ}>{reportButtonLabel}</h5><button>add answer</button>
        </div>
        <div>A:{ans}</div>
      </div>
    )
  }
}

export default QuestionItem;