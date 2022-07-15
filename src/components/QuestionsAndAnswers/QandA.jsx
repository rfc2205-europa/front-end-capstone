import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList/QuestionsList.jsx';
import QModal from './Modals/QModal.jsx';
import AModal from './Modals/AModal.jsx';
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
      searchView: false,
      openQModalView: false,
      openAModalView: false,
      productId: '66680',//66642, 66680
      questionId: '',
      productInfo: {}
    }
  }

  //fetches data from api on mounting of component
  componentDidMount = () => {
    //switch this line when the props are drilled for a product id from parent component
    this.fetch(this.state.productId);
    this.fetchProductName(this.state.productId);
    //this.fetch(this.props.product_id);
    //this.fetchProductName(this.props.product_id);
  }


  //pass in props of product id in componentDidMount function
  //fetches questions for a product from api
  fetch = (product_id) => {
    //var product_id = product_id || this.state.productId;
    var body = { api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${product_id}` }
    service.post('/retrieve', body)
      .then((res) => {
        //console.log('results from fetch: ', res);
        this.setState({
          questions: res.data.results
        })
      })
      .catch((err) => {
        console.log('There is an error in fetching data: ', err)
      })
  }

  //fetches product info from api
  fetchProductName = (product_id) => {
    //GET /products/:product_id
    var body = { api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/products/${product_id}` }
    service.post('/retrieve', body)
      .then((res) => {
        //console.log('results from fetchProductName: ', res.data);
        this.setState({
          productInfo: res.data
        })
      })
      .catch((err) => {
        console.log('There is an error in fetching product name data: ', err)
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

  //adds questions to list
  addQs = () => {
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

  //opens submit question modal
  openQModal = () => {
    if (this.state.openQModalView) {
      this.setState({
        openQModalView: false
      })
    }else{
      this.setState({
        openQModalView: true
      })
    }
  }

  //opens submit answer modal
  openAModal = (question_id) => {
    if (this.state.openAModalView) {
      this.setState({
        openAModalView: false
      })
    }else{
      this.setState({
        openAModalView: true,
        questionId: question_id
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

    //conditional rendering for button
    let button;
    if (this.state.smallView) {
      if (this.state.questions.length > 2) {
        button = <button className="qButton" onClick={this.addQs}>ADD MORE ANSWERED QUESTIONS</button>
      } else {
        button = <div></div>
      }
    } else {
      button = <button className="qButton" onClick={this.addQs}>Remove Added Questions and Answers</button>
    }


    return (
      <div className="q_and_a">
        <h6>QUESTIONS & ANSWERS</h6>
        {this.state.openQModalView && <QModal toggle={this.openQModal} productId={this.state.productId} productName={this.state.productInfo.name}/>}
        {this.state.openAModalView && <AModal toggle={this.openAModal} questionId={this.state.questionId} productName={this.state.productInfo.name}/>}
        <Search search={this.search} questions={this.state.questions} />
        <div className="qList">
          <QuestionsList questions={listView} smallV={this.state.smallView} fetch={this.fetch} toggleAModal={this.openAModal}/>
        </div>
        {button}<button className="qButton" onClick={this.openQModal}>ADD A QUESTION +</button>

      </div>
    )
  }
}

export default QandA;
