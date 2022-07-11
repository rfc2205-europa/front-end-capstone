import React from 'react';

class QuestionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    let body, ans;
    let ansArray = [];
    let sArray = [];

    if (this.props.info !== undefined) {
      let { question_body, answers } = this.props.info;
      body = question_body;
      for (const key in answers) {
        ansArray.push(answers[key]);
      }
      sArray= ansArray.sort((a,b)=>{
        return b.helpfulness-a.helpfulness;
      })
      if(this.props.view){
      ans = sArray.slice(0,2).map((answer) => (
        <div className="answers">
          <h5>{answer.body}</h5>
          <h5>helpfulness:{answer.helpfulness}</h5>
          <h5>by:{answer.answerer_name}date:{answer.date}</h5>
        </div>
      ))
      }else{
        ans = sArray.map((answer) => (
          <div className="answers">
            <h5>{answer.body}</h5>
            <h5>helpfulness:{answer.helpfulness}</h5>
            <h5>by:{answer.answerer_name}date:{answer.date}</h5>
          </div>
        ))
      }
    } else {
      body = ''
    }

    return (
      <div className="tile">
        <h3>Q:{body}</h3><button>add answer</button>
        <div>A:{ans}</div>
      </div>
    )
  }
}

export default QuestionItem;