import authReducer from '../../reducers/auth'

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'fge3456'
    }
    const state = authReducer({}, action)
    expect(state.uid).toBe(action.uid)
})

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({uid: 'fgheog'}, action)
    expect(state).toEqual({})
})