import React from 'react'
import { shallow } from 'enzyme'
import SignUpForm from '../../components/SignUpForm'
import userId from '../fixtures/userId'

let onSubmitSpy, wrapper

beforeEach(() => {
    onSubmitSpy = jest.fn()
    wrapper = shallow(<SignUpForm onSubmit={onSubmitSpy} />)
})
test('should render SignUpForm correctly', () => {
    expect(wrapper).toMatchSnapshot()
})