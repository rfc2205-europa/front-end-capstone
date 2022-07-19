import React from 'react';
import QuestionItem from './QuestionItem.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smallView: true,
    };
  }

  // controls the amount of questions displayed
  moreAnsQues = () => {
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

  /*

  TODO:

  collapse list and reveal a button to submit a new question based of an empty

  If no questions have been submitted for this product,
  then the list will collapse, and the button to submit
  a new question (section 1.3.5) will appear near the top of the module.

  */

  render() {
    // let list;
    // let button;
    let questions = [];

    // determines the size of list and controls button label for change
    if (this.props.smallV) {
      if (this.props.questions.length > 2) {
        questions = this.props.questions.slice(0, 2);
      } else {
        questions = this.props.questions;
      }
    } else {
      questions = this.props.questions;
    }

    // dynamic list render of questions if props is available
    // console.log(questions)
    const list = questions.map((q) => (
      <QuestionItem info={q} key={Math.random()} fetch={this.props.fetch} toggleAModal={this.props.toggleAModal}/>
    ));

    return (
      <div>
        <div>{list}</div>
      </div>
    );
  }
}

export default QuestionsList;

