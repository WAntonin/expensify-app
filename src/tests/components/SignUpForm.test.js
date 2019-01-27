import React from 'react'
import { shallow } from 'enzyme'
import SignUpForm from '../../components/SignUpForm'
import userId from '../fixtures/userId'

let onSubmitSpy, wrapper

beforeEach(() => {
    onSubmitSpy = jest.fn()
    wrapper = shallow(<SignUpForm userId={userId} onSubmit={onSubmitSpy} />)
})

test('should render SignUpForm correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should set userName on input change', () => {
    const value = userId.userName
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('userName')).toBe(value)
})

test('should set email on input change', () => {
    const value = userId.email
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('email')).toBe(value)
})

test('should set password on input change', () => {
    const value = userId.password
    wrapper.find('input').at(2).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('password')).toBe(value)
})

test('should set passwordConfirmation on input change', () => {
    const value = userId.password
    wrapper.find('input').at(3).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('passwordConfirmation')).toBe(value)
})

test('should submit SignUpForm correctly', () => {
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        email: userId.email,
        password: userId.password,
    })
})