import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  // sets input in state to values typed into form
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    }, () => {
      if (this.state.input.length > 1) {
        this.handleSearch();
      }
    });
  };

  // calls search in parent component
  handleSearch = () => {
    this.props.search(this.state.input, this.state.input.length);
  };


  render() {
    return (
      <div className="qSearchForm">
        <form>
          <input className="qSearch" type="text" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." onChange={this.handleChange}>
          </input>
        </form>
      </div>
    );
  }
}

export default Search;
