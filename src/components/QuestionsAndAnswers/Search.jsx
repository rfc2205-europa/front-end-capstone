import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }

  //sets input in state to values typed into form
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  render(){
    return(
      <div>Search form
        <form>
          <input type="text" placeholder="Have a Question Search For Answers" onChange={this.handleChange}>
          </input><input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default Search;