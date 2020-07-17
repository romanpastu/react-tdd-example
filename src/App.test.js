import React from 'react';
import Counter from './Counter'
import App from './App'
import {shallow, mount} from "enzyme";


describe('Counter Testing', () =>{

  let wrapper;
  beforeEach(() =>{
    wrapper = mount(<App />)

  })

  test('renders the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain("This is counter app")
  });

  test("render a button with text of `ìncrement`" , () =>{
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  })

  test("render the initial value of state in a div", () =>{
    expect(wrapper.find('#counter-value').text()).toBe("0")
  })

  test("render the click event of increment button and increment counter value", () =>{
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  })

  test("render the click event of decrement button and decrement counter value", () =>{
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  })

  test("check that the counter doesnt get negative", () => {
    wrapper.find('#decrement-btn').simulate('click');
    expect(Number(wrapper.find('#counter-value').text())).toBeGreaterThanOrEqual(0);
  })
})

