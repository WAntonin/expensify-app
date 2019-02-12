import React from 'react'

const authenticate = (WrappedComponent) => {
    class Authenticate extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                email: '',
                password: ''
            }
            this.onInputChange = this.onInputChange.bind(this);
            this.submit = this.submit.bind(this)
            // console.log('AUTHENTICATE', props.onSubmit)
            console.log(typeof(this.state.email), this.state.email)
            // console.log(props.onSubmit(this.state.email, this.state.password))

        }
        onInputChange = (e) => {
            e.preventDefault()
            console.log('INPUT_CHANGE', this.state)
            const inputName = e.target.name 
            const inputValue = e.target.value 
            this.setState({ [inputName]: inputValue })
            console.log(typeof(this.state.email), this.state.email)

        }
        submit = () => {
            // console.log('SUBMIT', this.state.email, this.state.password)
            // debugger
            const email = this.state.email
            const password = this.state.password
            console.log(this.state.email, this.state.password)
            debugger
            this.props.onSubmit(email, password)
            debugger
        }
        render() {
            const { onSubmit, onInputChange, ...otherProps } = this.props
            return (
                <WrappedComponent
                onChange={this.onInputChange}
                onSubmit={this.submit}
                {...otherProps}
                />)
        }
    }
    return Authenticate
}

export default authenticate