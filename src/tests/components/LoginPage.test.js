import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'
import userId from '../fixtures/userId.js'


test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />)
    expect(wrapper).toMatchSnapshot()
})

test('should handle startEmailPasswordLogin', () => {
    const startEmailPasswordLogin = jest.fn()
    const wrapper = shallow(<LoginPage 
        startEmailPasswordLogin={startEmailPasswordLogin}
        userId={userId}
        />)
    wrapper.find('LoginForm').prop('onSubmit')(userId)
    expect(startEmailPasswordLogin).toHaveBeenLastCalledWith(userId.email, userId.password)
})