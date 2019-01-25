import React from 'react'
import { shallow } from 'enzyme'
import { SignUpPage } from '../../components/SignUpPage'
import userId from '../fixtures/userId.js'

test('should render SignUpPage correctly', () => {
    const wrapper = shallow(<SignUpPage />)
    expect(wrapper).toMatchSnapshot()
})

test('should handle startCreateUserAccount on SignUpForm submit', () => {
    const startCreateUserAccount = jest.fn()
    const wrapper = shallow(<SignUpPage
        userId={userId}
        startCreateUserAccount={startCreateUserAccount}
        />)
    wrapper.find('SignUpForm').prop('onSubmit')(userId)
    expect(startCreateUserAccount).toHaveBeenLastCalledWith(userId.email, userId.password)
})