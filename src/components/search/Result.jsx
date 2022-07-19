import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { result } = this.props
    return (
      <div
        className="result"
        onClick={this.props.select}
        id={result.id}
      >
        <div>
          <h3 className="resultLeft" id={result.id}>{result.name}</h3>
        </div>
        <div className="resultRight">
          <h4 id={result.id}>Category: {result.category}</h4>
          <p className="slogan" id={result.id}>{result.slogan}</p>
          <p id={result.id}>{result.description}</p>
        </div>
      </div>
    )
  }
}

export default Result;