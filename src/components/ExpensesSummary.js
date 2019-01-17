import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectTotalExpenses from '../selectors/expenses-total'
import numeral from 'numeral'


export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
    const plural = expenseCount > 1 ? 's' : ''
    const formattedExpenseTotal = numeral(expenseTotal / 100).format('0,0.00$')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> expense{plural} for a total of <span>{formattedExpenseTotal}</span></h1>
            <div className="page-header__actions">
            <Link className="button" to="/create">Add expense</Link>
            </div>
                </div>
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