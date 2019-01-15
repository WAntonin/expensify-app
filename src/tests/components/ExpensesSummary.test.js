import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('should render ExpenseSummary correctly with 1 expense totalling 1.95$', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={1.95} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary correctly with mutltiple expenses totalling 46.95$', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expenseTotal={46.95} />)
    expect(wrapper).toMatchSnapshot()
})