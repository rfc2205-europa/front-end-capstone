import renderer from 'react-test-renderer';
import QandA from './QandA.jsx';
import React from 'react';

describe.only("QandA Component Rendering", function () {
  it('renders the QandA component correctly', () => {
    const tree = renderer.create(<QandA/>);
    expect(tree).toMatchSnapshot();
  });
});