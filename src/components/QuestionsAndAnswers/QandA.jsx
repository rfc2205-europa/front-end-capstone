import React from 'react';
import axios from 'axios';

class QandA extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.fetch();
  }

  fetch = () => {
    axios.request({
      method: 'get',
      data: {
        api: "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/qa/questions?product_id=66642",
      },
      url: 'http://localhost:3005/qa/questions'
    })
    .then((data)=> {
      console.log(data);
    })
    .catch((err)=> {
      console.log('There was an error in fetching data: ', err);
    })
  }

  render() {
    return (
      <div>
        <h3>Questions and Answers</h3>
      </div>
    )
  }
}

export default QandA;