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
      smallView: true
    }
  }

  //fetches data from api on mounting of component
  componentDidMount = () => {
    this.fetch();
  }

  //fetches questions from api
  fetch = (product_id) => {
    var product_id = product_id || '67528';
    var body = { api: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=${product_id}` }
    service.post('/retrieve', body)
      .then((res) => {
        console.log(res);
        this.setState({
          questions: res.data
        })
      })
      .catch((err) => {
        console.log('There is an error in fetching data: ', err)
      })
  }


  render() {
    return (
      <div>
        <h3>Questions and Answers</h3>
        <Search />
        <QuestionsList questions={this.state.questions.results} fetch={this.fetch}/>
      </div>
    )
  }
}

export default QandA;
