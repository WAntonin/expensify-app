import React from 'react'
import { shallow } from 'enzyme'
import { RetrievePasswordPage } from '../../components/RetrievePasswordPage'
import userId from '../fixtures/userId';

let wrapper, startPasswordReset, onSubmitSpy

beforeEach(() => {
    onSubmitSpy = jest.fn()
    startPasswordReset = jest.fn()
    wrapper = shallow(<RetrievePasswordPage userId={userId} startPasswordReset={startPasswordReset} />)
})

test('should render RetrievePasswordPage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should set email on change', () => {
    const value = userId.email
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('email')).toBe(value)
})

test('should submit RetrievePasswordPage form correctly', () => {
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        email: userId.email,
    })
})