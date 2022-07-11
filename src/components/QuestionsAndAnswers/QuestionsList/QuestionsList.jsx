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
    let list, questions;
    if (this.props.questions !== undefined) {
      if (this.state.smallView) {
        questions = this.props.questions.slice(0, 2)
      } else {
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
        <button onClick={this.moreAnsQues}>Add More Answered Questions</button><button>Add A Question</button>
      </div>
    )
  }
}

export default QuestionsList;

