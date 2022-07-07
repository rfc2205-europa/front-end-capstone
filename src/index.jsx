// package imports
import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

// component imports
import Overview from './components/Overview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Overview />
      </div>
    )
  }
}

root.render(<App />);