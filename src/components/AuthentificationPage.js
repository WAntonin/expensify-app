import React from 'react'
import { connect } from 'react-redux'

export class AuthentificationPage extends React.Component {
    render() {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Expensify App</h1>
                    <h2 className="box-layout__subtitle">An application to log your expenses</h2>
                </div>
            </div>
        )
    }
}