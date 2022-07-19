import React from 'react';
import axios from 'axios';
import AnswerItem from './AnswerItem.jsx';


class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulQ: true,
      reportQ: <u className="qUnderline">Report</u>,
      reportQBool: true,
      smallView: true,
    };
  }

  // handles helpful question click
  helpfulQ = () => {
    console.log('helpful question');
    // send put req to server once per load
    if (this.state.helpfulQ) {
      const {questionId} = this.props.info;
      axios.put(`http://localhost:3005/qa/questions`, {
        'type': 'question',
        'api': `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${questionId}/helpful`,
      })
          .then((res) => {
            console.log('res in client from server: helpful question: ', res);
            this.setState({
              helpfulQ: false,
            });
          })
          .catch((err) => {
            console.log('ERROR IN PUT Helpful Question: ', err);
          });
    }

    //  this.setState({ helpfulQ: false })
  };

  // handles report question click
  reportQ = () => {
    console.log('report question');
    // qa/questions/:question_id/report
    // send put req to server once per load
    // render button label onclick
    if (this.state.reportQBool) {
      let { question_id } = this.props.info;
      axios.put(`http://localhost:3005/qa/questions`, {
        'type': 'question',
        'api': `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions/${question_id}/report`,
      })
          .then((res) => {
            console.log('response in client from server after report question: ', res);
            this.setState({
              reportQ: <u className="qUnderline">Reported</u>,
              reportQBool: false,
            });
          })
          .catch((err) => {
            console.log('ERROR IN PUT Helpful Question: ', err);
          });
    }

    // this.setState({report: false})
  };


  // toggle button and state value to render size of answers list
  togButton = () => {
    if (this.state.smallView) {
      this.setState({
        smallView: false,
      });
    } else {
      this.setState({
        smallView: true,
      });
    }
  };

  // increments helpful questions value
  incrementor = () => {
    if (this.state.helpfulQ) {
      this.helpfulQ(this.props.info.question_id);
      this.props.info.question_helpfulness++;
    }
  };

  render() {
    // let body;
    // let ans;
    // let help;
    let button;
    const ansArray = [];
    let sArray = [];
    // let sortedArrSellerFirst = [];

    let { question_body, answers, question_helpfulness } = this.props.info;
    const body = question_body;
    const help = question_helpfulness;

    // sorts data obj of answers into array
    for (const key in answers) {
      ansArray.push(answers[key]);
    }

    // sort list of answers by helpfulness
    sArray = ansArray.sort((a, b) => {
      return b.helpfulness - a.helpfulness;
    });

    // rendering for accordion list and conditionals for more answers button
    let list;
    if (this.state.smallView) {
      // if (this.props.view) {

      if (sArray.length > 2) {
        list = sArray.slice(0, 2);
        button = <h5 className="qw10B" onClick={this.togButton}>LOAD MORE ANSWERS</h5>
      } else {
        button = <div></div>;
        list = sArray;
      }
    } else {
      list = sArray;
      button = <h5 className="qw10B" onClick={this.togButton}>COLLAPSE ANSWERS</h5>
    }
    const ans = list.map((answer) => (
      <AnswerItem answer={answer} key={Math.random()} fetch={this.props.fetch} />
    ));

    return (
      <div className="qTile">
        <div className="qFirst_line">
          <h5 className="qbold13">Q: {body}</h5><p className="qw10"onClick={this.incrementor}>Helpful? Yes ({help})</p><p className="qw10" onClick={this.reportQ}>{this.state.reportQ}</p><p className="qw10Underline" onClick={()=>{this.props.toggleAModal(this.props.info.question_id, this.props.info.question_body)}}>Add Answer</p>
        </div>
        <div className="qAList" >{ans}</div>
        {button}
      </div>
    );
  }
}

export default QuestionItem;
