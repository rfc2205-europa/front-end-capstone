import React from 'react';
import axios from 'axios';
import Search from './Search.jsx';
import QuestionsList from './QuestionsList.jsx';
import QuestionItem from './QuestionItem.jsx'


const service = axios.create({
  baseURL: 'http://localhost:3005',
  changeOrigin: true
})

class QandA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  //fetches data from api on mounting of component
  componentDidMount() {
    this.fetch();
  }

  //fetches questions from api
  fetch(product_id) {
    var product_id = product_id || '66666';
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
        <QuestionsList />
        <button>Add More Answered Questions</button><button>Add A Question</button>
      </div>
    )
  }
}

export default QandA;