import React from 'react';
import axios from 'axios';
import AnswerItem from './AnswerItem.jsx'
//import style from '../style.css';


class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulQ: true,
      reportQ: <h5 className="qUnderline">Report</h5>,
      reportQBool: true,
      smallView: true
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
          console.log('response in client from server after helpful question: ', res)
          this.setState({
            helpfulQ: false
          })
        })
        .catch((err) => {
          console.log('ERROR IN PUT Helpful Question: ', err)
        })
    }

    //this.setState({ helpfulQ: false })

  }

  //handles report question click
  reportQ = () => {
    console.log('report question')
    //qa/questions/:question_id/report
    //send put req to server once per load
    //render button label onclick
    if (this.state.reportQBool) {
      let { question_id } = this.props.info;
      axios.put(`http://localhost:3005/qa/questions`, {
        "type": "question",
        "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}/report`
      })
        .then((res) => {
          console.log('response in client from server after report question: ', res)
          this.setState({
            reportQ: <h5 className="qUnderline">Reported</h5>,
            reportQBool: false
          })
        })
        .catch((err) => {
          console.log('ERROR IN PUT Helpful Question: ', err)
        })
    }

    //this.setState({report: false})
  }

  /*

  TODO:

  questions:
  format date
  conditional rendering for questions collapsing of list when there is no questions for an item
  In order to keep the page manageable, the maximum height of the questions list should be capped such that the entire Questions & Answers module should fit on a single screen. The questions list should become scrollable.

  answers:
  any answers from the seller should appear at the top of the list
  The view for the full list of answers should be confined to half of the screen, and the list within should be scrollable.

  */

  //toggle button and state value to render size of answers list
  togButton = () => {
    if (this.state.smallView) {
      this.setState({
        smallView: false
      })
    } else {
      this.setState({
        smallView: true
      })
    }
  }

  //increments helpful questions value
  incrementor = () => {
    if (this.state.helpfulQ) {
      this.helpfulQ(this.props.info.question_id)
      this.props.info.question_helpfulness++;
    }
  }

  render() {

    let body, ans, help, button;
    let ansArray = [];
    let sArray = [];
    let sortedArrSellerFirst = [];

    let { question_body, answers, question_helpfulness } = this.props.info;
    body = question_body;
    help = question_helpfulness;

    //sorts data obj of answers into array
    for (const key in answers) {
      ansArray.push(answers[key]);
    }

    //sort list of answers by helpfulness
    sArray = ansArray.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    })

    //sort the answers by seller first needs to be implemented
    sArray.forEach((answer)=>{

    })

    //rendering for accordion list and conditionals for more answers button
    let list;
    if (this.state.smallView) {
      // if (this.props.view) {

      if (sArray.length > 2) {
        list = sArray.slice(0, 2)
        button = <h5 onClick={this.togButton}>LOAD MORE ANSWERS</h5>
      } else {
        button = <div></div>
        list = sArray
      }
    } else {
      list = sArray
      button = <h5 onClick={this.togButton}>COLLAPSE ANSWERS</h5>
    }
    ans = list.map((answer) => (
      <AnswerItem answer={answer} key={Math.random()} fetch={this.props.fetch} />
    ))

    return (
      <div className="qTile">
        <div className="qFirst_line">
          <h4>Q: {body}</h4><h5 onClick={this.incrementor}>Helpful? Yes ({help})</h5><h5 onClick={this.reportQ}>{this.state.reportQ}</h5><h5 className="qUnderline">Add Answer</h5>
        </div>
        <div>{ans}</div>
        {button}
      </div>
    )
  }
}

export default QuestionItem;