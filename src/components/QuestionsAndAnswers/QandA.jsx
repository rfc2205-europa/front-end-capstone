import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
// import style from './style.css';


const service = axios.create({
  baseURL: 'http://localhost:3005',
  changeOrigin: true,
});

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      searchQ: [],
      smallView: true,
      searchView: false
    }
  }

  //fetches data from api on mounting of component
  componentDidMount = () => {
    this.fetch();
  }

  //fetches questions from api
  fetch = (product_id) => {
    var product_id = product_id || '66631';
    var body = { api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${product_id}` }
    service.post('/retrieve', body)
      .then((res) => {
        console.log(res);
        this.setState({
          questions: res.data.results
        })
      })
      .catch((err) => {
        console.log('There is an error in fetching data: ', err)
      })
  }

  //searches state for matching questions
  search = (query, length) => {
    if (query.length > 2) {
      let searchResult = []
      this.state.questions.forEach((question) => {
        let body = question.question_body
        console.log('slice: ', body.slice(0, length), 'query: ', query);
        if (query === body.slice(0, length)) {
          console.log('match')
          searchResult.push(question)
        }
      })
      this.setState({
        searchQ: searchResult,
        searchView: true
      })
    } else {
      this.setState({
        searchView: false
      })
    }
  }

  addQs = () => {
    if(this.state.smallView){
      this.setState({
        smallView: false
      })
    }else{
      this.setState({
        smallView: true
      })
    }
  }

  render() {

    //conditional for rendering the search question list
    let listView;
    if (this.state.searchView) {
      listView = this.state.searchQ
    } else {
      listView = this.state.questions
    }

    let button;
    if (this.state.smallView) {
      if (this.state.questions.length > 2) {
        button = <button onClick={this.addQs}>Add More Answered Questions</button>
      } else {
        button = <div></div>
      }
    } else {
      button = <button onClick={this.addQs}>Remove Added Questions and Answers</button>
    }


    return (
      <div className="q_and_a">
        <h3>Questions and Answers</h3>
        <Search search={this.search} questions={this.state.questions} />
        <div className="qList">
          <QuestionsList questions={listView} smallV={this.state.smallView}fetch={this.fetch} />
        </div>
        {button}<button>Add a Question</button>
      </div>
    )
  }
}

export default QandA;
