import {
    login,
    startLogin,
    logout,
    startLogout
} from '../../actions/auth'

test('should generate login action correctly', () => {
    const uid = 'FEGA34YEGF'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should generate logout action correctly', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})