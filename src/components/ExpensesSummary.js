import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectTotalExpenses from '../selectors/expenses-total'
import numeral from 'numeral'


export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
    const plural = expenseCount > 1 ? 's' : ''
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('0,0.00$')
    return(
    <div>
        <h1>Viewing {expenseCount} expense{plural} for a total of {formattedExpenseTotal}</h1>
    </div>
    )
}

const mapStateToProps = (state) => {
    const filteredExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: filteredExpenses.length,
        expenseTotal: selectTotalExpenses(filteredExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)