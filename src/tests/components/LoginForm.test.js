import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '../../components/LoginForm'
import userId from '../fixtures/userId'

let email, password, onSubmitSpy, wrapper

beforeEach(() => {
    email = {
        target: {
            value: userId.email,
            name: 'email'
        },
    }
    password = {
        target: {
            value: userId.password,
            name: 'password'
        },
    }
    onSubmitSpy = jest.fn()
    wrapper = shallow(<LoginForm userId={userId} onSubmit={onSubmitSpy} />)
})
test('should render LoginForm correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should set email on input change', () => {
    wrapper.find('input').at(0).simulate('change', email)
    expect(wrapper.state(email.target.name)).toBe(userId.email)
})

test('should set password on input change', () => {
    wrapper.find('input').at(1).simulate('change', password)
    expect(wrapper.state(password.target.name)).toBe(userId.password)
})

test('should call onSubmit prop for valid form submission', () => {
    wrapper.find('input').at(0).simulate('change', email)
    wrapper.find('input').at(1).simulate('change', password)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        email: email.target.value,
        password: password.target.value
    })
})