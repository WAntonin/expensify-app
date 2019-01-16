import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
    isAuthentificated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthentificated ? (
                <Redirect to="/dashboard" />

            ) : (
                <Component {...props} />
                )
        )} />
    )

const mapStateToProps = (state) => ({
    isAuthentificated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)