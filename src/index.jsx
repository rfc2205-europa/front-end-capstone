// package imports
import React from 'react';
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

// component imports
import Overview from './components/overview/Overview.jsx'
import Review from './components/reviews/Review.jsx'
import QandA from './components/QuestionsAndAnswers/QAndA.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Overview />
        <Review/>
        <QandA/>
      </div>
    )
  }
}

root.render(<App />);