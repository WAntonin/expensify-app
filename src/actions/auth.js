import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startGoogleLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startFacebookLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider)
    }
}

export const startEmailPasswordLogin = (email, password) => {
    return () => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }
}

export const startCreateUserAccount = (email, password) => {
    return () => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}