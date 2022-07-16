import renderer from 'react-test-renderer';
import QandA from './QandA.jsx';
import React from 'react';
import AModal from './Modals/AModal';
import QModal from './Modals/QModal';
import AnswerItem from './QuestionsList/AnswerItem.jsx';
import QuestionItem from './QuestionsList/QuestionItem.jsx';
import QuestionsList from './QuestionsList/QuestionsList.jsx';

describe("QandA Component Testing", function () {
  it('renders the QandA component correctly', () => {
    const component = renderer.create(<QandA/>);
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot();

    // renderer.act(() => {
    //   tree.props.onMouseEnter();
    // });
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();

    // renderer.act(() => {
    //   tree.props.onMouseLeave();
    // });
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });

  it('renders the Answer Modal component correctly', () => {
    const tree = renderer.create(<AModal/>);
    expect(tree).toMatchSnapshot();
  });

  it('renders the Questions Modal component correctly', () => {
    const tree = renderer.create(<QModal/>);
    expect(tree).toMatchSnapshot();
  });

});

describe("QandA Component Testing", function () {
  it('renders the Answer Item component correctly', () => {
    const tree = renderer.create(<AnswerItem/>);
    expect(tree).toMatchSnapshot();
  });

  it('renders the Question Item component correctly', () => {
    const tree = renderer.create(<QuestionItem/>);
    expect(tree).toMatchSnapshot();
  });

  it('renders the Questions List component correctly', () => {
    const tree = renderer.create(<QuestionsList/>);
    expect(tree).toMatchSnapshot();
  });
});