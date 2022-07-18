import renderer from 'react-test-renderer';
import AnswerItem from './AnswerItem.jsx';
import React from 'react';


describe("QandA Component Testing", function () {
  it('renders the QandA component correctly', () => {
    const component = renderer.create(<AnswerItem  answer={props.info.answer} key={Math.random()} fetch={this.props.fetch}/>);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();
  });

});