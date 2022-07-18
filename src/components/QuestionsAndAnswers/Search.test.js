import renderer from 'react-test-renderer';
import React from 'react';
import Search from './Search';

describe("Search Component Testing", function () {
  it('Renders the Search component correctly', () => {
    const component = renderer.create(<Search/>);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  });

});