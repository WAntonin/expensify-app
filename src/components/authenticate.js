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
        }
        onInputChange = (e) => {
            e.preventDefault()
            console.log('INPUT_CHANGE')
            const inputName = e.target.name 
            const inputValue = e.target.value 
            this.setState({ [inputName]: inputValue})
        }
        submit = () => {
            console.log('SUBMIT')
            this.props.onSubmit({
                email: this.state.email,
                password: this.state.password
            })
            console.log('SUBMIT', this.state.email, this.state.password)
            debugger
        }
        render() {
            const { onChange, onSubmit, ...otherProps } = this.props
            return (
                <WrappedComponent
                onChange={ this.onInputChange}
                onSubmit={this.submit}
                {...otherProps}
                />)
        }
    }
    return Authenticate
}

export default authenticate