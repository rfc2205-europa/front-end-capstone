import renderer from 'react-test-renderer';
import QuestionsList from './QuestionList.jsx';
import React from 'react';


describe("QandA Component Testing", function () {
  it('renders the QandA component correctly', () => {
    const component = renderer.create(<QuestionsList />);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  });

});