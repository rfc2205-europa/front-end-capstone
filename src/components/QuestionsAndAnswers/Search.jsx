import React from 'react';

class Search extends React.Component {
  constructor(props) {
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
    if (this.state.input.length > 1) {
      this.handleSearch()
    }
  }

  handleSearch = () => {
    console.log(this.state.input)
    this.props.search(this.state.input, this.state.input.length)
  }


  render() {
    return (
      <div className="search" >
        <form>
          <input type="text" placeholder="Have a Question Search For Answers" onChange={this.handleChange}>
          </input>
        </form>
      </div>
    )
  }
}

export default Search;