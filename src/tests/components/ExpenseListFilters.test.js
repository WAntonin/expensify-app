import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, valuesFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />
    )
})

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with all data correctly', () => {
    wrapper.setProps({
        filters: valuesFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'some filter text value'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should handle sortByDate', () => {
    const value = 'date'
    wrapper.setProps({
        filters: valuesFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenLastCalledWith()
})

test('should handle sortByAmount', () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8,'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})