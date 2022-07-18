import renderer from 'react-test-renderer';
import QandA from './QandA.jsx';
import React from 'react';


describe("QandA Component Testing", function () {
  it('renders the QandA component correctly', () => {
    const component = renderer.create(<QandA />);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  });

});
