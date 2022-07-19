import renderer from 'react-test-renderer';
import QuestionItem from './QuestionItem.jsx';
import React from 'react';


describe("QandA Component Testing", function () {
  it('renders the QandA component correctly', () => {
    const component = renderer.create(<QuestionItem />);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  });

});