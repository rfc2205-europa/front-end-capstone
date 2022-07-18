import renderer from 'react-test-renderer';
import React from 'react';
import AModal from './AModal';

describe("AModal Component Testing", function () {
  it('renders the AModal component correctly', () => {
    const component = renderer.create(<AModal/>);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();

  });
});