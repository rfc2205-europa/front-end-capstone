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
    //this function will increment the helpfulness value of a question
      //then send a put request to update that questions helpfulness count
    //  /qa/questions/:question_id/helpful
    let { question_id } = this.props.info;
    axios.put(`http://localhost:3005/qa/questions`, {
        "type": "question",
        "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}/helpful`
    })
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=> {
      console.log('ERROR IN PUT Helpful Question: ', err)
    })
    //this.setState({helpfulQ: false})
  }

  //handles helpful answer click
  helpfulA = (id) => {
    console.log('helpful answer: ')
      //this.setState({helpfulA: false})
      /// /qa/answers/:answer_id/helpful
      // let { question_id } = this.props.info;
      // axios.put(`http://localhost:3005/qa/answers`, {
      //     "type": "answer",
      //     "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/answers/${id}/helpful`
      // })
      // .then((res)=>{
      //   console.log(res)
      // })
      // .catch((err)=> {
      //   console.log('ERROR IN PUT Helpful Answer: ', err)
      // })
      //this.setState({helpfulQ: false})
  }

  //handles report answer click
  report = () => {
    console.log('report')
    //this.setState({report: false})
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
              <h5 onClick={this.helpfulA}>Helpful? Yes {answer.helpfulness} </h5><h5 onClick={this.report}>Report</h5>
            </div>
          </div>
        ))
      } else {
        ans = sArray.map((answer) => (
          <div className="answers" key={Math.random()}>
            <h5>{answer.body}</h5>
            <div className="bottom_line">
              <h5>by:{answer.answerer_name}</h5>
              <h5 onClick={this.helpfulA}>Helpful? Yes {answer.helpfulness}</h5>
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
          <h3>Q:{body}</h3><h5 onClick={this.helpfulQ}>Helpful? Yes {help}</h5><button>add answer</button>
        </div>
        <div>A:{ans}</div>
      </div>
    )
  }
}

export default QuestionItem;