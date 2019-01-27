import React from 'react'
import { shallow } from 'enzyme'
import { RetrievePasswordPage } from '../../components/RetrievePasswordPage'
import userId from '../fixtures/userId';

let wrapper

beforeEach(() => {
    wrapper = shallow(<RetrievePasswordPage />)
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