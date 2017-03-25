import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';

import TodoList from './TodoList';

it('renders a todolist without crashing', () => {
  const todoList = mount(<TodoList />);
  expect(todoList.find('li').length).to.equal(0);
  todoList.find('button').simulate('click');
  expect(todoList.find('li > input').length).to.equal(1);
  const input = todoList.find('li > input')
  input.node.value = 'hello';
  input.simulate('keyPress', { key: 'Enter' });
  expect(todoList.find('li').text()).to.equal('hello');
});