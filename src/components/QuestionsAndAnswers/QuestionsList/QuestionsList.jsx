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

    //defines list variable value
    if (this.props.questions !== undefined) {

      //determines the size of list and controls button label for change
      if (this.state.smallView) {
        buttonText = 'Add More Answered Questions'
        questions = this.props.questions.slice(0, 2)
      } else {
        buttonText = 'Remove Added Questions and Answers'
        questions = this.props.questions
      }

      //dynamic list render of questions if props is available
      list = questions.map((q) => (
        <QuestionItem info={q} view={this.state.smallView} key={Math.random()} fetch={this.props.fetch} />
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

