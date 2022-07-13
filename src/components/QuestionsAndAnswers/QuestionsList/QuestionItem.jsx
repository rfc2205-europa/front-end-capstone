import React from 'react';
import axios from 'axios';
import AnswerItem from './AnswerItem.jsx'
//import style from '../style.css';


class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulQ: true,
      reportQ: 'Report',
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
          console.log(res)
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

    let { question_id } = this.props.info;
    axios.put(`http://localhost:3005/qa/questions`, {
      "type": "question",
      "api": `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}/report`
    })
      .then((res) => {
        console.log(res)
        this.setState({ reportQ: 'Reported' })
      })
      .catch((err) => {
        console.log('ERROR IN PUT Helpful Question: ', err)
      })

    //this.setState({report: false})
  }

  /*

  TODO:

  questions:
  format date
  conditional rendering for questions view button and collapsing of list

  answers:
  any answers from the seller should appear at the top of the list


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

  //limiter for helpful questions
  limiter = () => {
    if (this.state.helpfulQ) {
      this.helpfulQ(this.props.info.question_id)
      this.props.info.question_helpfulness++;
    }
  }

  render() {

    let body, ans, help, buttonText, button;
    let ansArray = [];
    let sArray = [];

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

      //rendering for accordion list and conditionals for more answers button
      let list;
      if (this.state.smallView) {
        // if (this.props.view) {

        if(sArray.length > 2){
          list = sArray.slice(0, 2)
          button = <button onClick={this.togButton}>See more answers</button>
        }else{
          button = <div></div>
          list = sArray
        }
      } else {
        list = sArray
        button = <button onClick={this.togButton}>Collapse answers</button>
      }
      ans = list.map((answer) => (
        <AnswerItem answer={answer} key={Math.random()} fetch={this.props.fetch} />
      ))
    } else {
      body = ''
    }

    return (
      <div className="tile">
        <div className="first_line">
          <h3>Q:{body}</h3><h5 onClick={this.limiter}>Helpful? Yes ({help})</h5><h5 onClick={this.reportQ}>{this.state.reportQ}</h5><button>add answer</button>
        </div>
        <div>A:{ans}</div>
        {button}
      </div>
    )
  }
}

export default QuestionItem;