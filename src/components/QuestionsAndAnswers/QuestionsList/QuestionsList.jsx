import React from 'react';
import QuestionItem from "./QuestionItem.jsx"

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smallView: true,
    }
  }

  //controls the amount of questions displayed
  moreAnsQues = () => {
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

  render() {
    let list, questions, buttonText;
    if (this.props.questions !== undefined) {
      questions = this.props.questions.sort((a,b)=>{
        return b.helpfulness-a.helpfulness
      })
      if (this.state.smallView) {
        buttonText = 'Add More Answered Questions'
        questions = this.props.questions.slice(0, 2)
      } else {
        buttonText = 'Remove Added Questions and Answers'
        questions = this.props.questions
      }
      list = questions.map((q) => (
        <QuestionItem info={q} view={this.state.smallView} key={Math.random()} />
      ))
    } else {
      list = <QuestionItem />
    }
    return (
      <div>
        <div>{list}</div>
        <button onClick={this.moreAnsQues}>{buttonText}</button><button>Add A Question</button>
      </div>
    )
  }
}

export default QuestionsList;

