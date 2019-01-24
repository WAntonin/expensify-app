import React from 'react'
import { shallow } from 'enzyme'
import { LoginForm } from '../../components/LoginForm'

test('should render LoginForm correctly', () => {
    const wrapper = shallow(<LoginForm />)
    expect(wrapper).toMatchSnapshot()
})

test('should call startGoogleLogin on button click', () => {
    const startGoogleLogin = jest.fn()
    const wrapper = shallow(<LoginForm startGoogleLogin={startGoogleLogin}/>)
    wrapper.find('button').at(0).simulate('click')
    expect(startGoogleLogin).toHaveBeenCalled()
})


test('should call startFacebookLogin on button click', () => {
    const startFacebookLogin = jest.fn()
    const wrapper = shallow(<LoginForm startFacebookLogin={startFacebookLogin}/>)
    wrapper.find('button').at(1).simulate('click')
    expect(startFacebookLogin).toHaveBeenCalled()
})

test('should set email on input change', () => {
    const event = {
        target: {
                value: 'test@test.test',
                name: 'email'
            },
        }
    const wrapper = shallow(<LoginForm />)
    wrapper.find('input').at(0).simulate('change', event)
    expect(wrapper.state(event.target.name)).toBe(event.target.value)
})

test('should set password on input change', () => {
    const event = {
        target: {
                value: 'AveryS4fePassWoRd!ù',
                name: 'password'
            },
        }
    const wrapper = shallow(<LoginForm />)
    wrapper.find('input').at(0).simulate('change', event)
    expect(wrapper.state(event.target.name)).toBe(event.target.value)
})