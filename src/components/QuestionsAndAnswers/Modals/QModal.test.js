import renderer from 'react-test-renderer';
import React from 'react';
import QModal from './QModal';

describe("Question Modal Component Testing", function () {
  it('Renders the Questions Modal component correctly', () => {
    const component = renderer.create(<QModal/>);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  });
});