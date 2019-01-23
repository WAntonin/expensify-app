import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startGoogleLogin = () => {
    return () => {
        console.log('start login')
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
        console.log('start login')
        return firebase.auth().signInWithEmailAndPassword(email, password)
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