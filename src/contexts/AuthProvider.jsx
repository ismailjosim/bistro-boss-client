import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)

	//============>  Create User <============//
	// create user with email and password
	const createNewUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}
	// with Google Provider
	const googleProviderLogin = (provider) => {
		setLoading(true)
		return signInWithPopup(auth, provider)
	}

	// with Github Provider
	const githubProviderLogin = (provider) => {
		setLoading(true)
		return signInWithPopup(auth, provider)
	}

	//============>  Login User <============//
	// Login user with email and password
	const userLogin = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	//============>  Manage User <============//
	// update User Profile
	const updateUserProfile = (profile) => {
		return updateProfile(auth.currentUser, profile)
	}

	// Monitor user changes
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser)

			// get and set token
			if (currentUser) {
				axios
					.post(`${process.env.REACT_APP_SERVER_URL}/jwt`, {
						email: currentUser.email,
					})
					.then((data) => {
						if (data.data) {
							localStorage.setItem('access-token', data?.data?.token)
							setLoading(false)
						}
					})
			} else {
				localStorage.removeItem('access-token')
				setLoading(false)
			}
		})

		return () => {
			return unsubscribe()
		}
	}, [])

	// user Logout
	const userLogout = () => {
		return signOut(auth)
	}

	const authInfo = {
		user,
		loading,
		googleProviderLogin,
		githubProviderLogin,
		updateUserProfile,
		createNewUser,
		userLogin,
		userLogout,
	}

	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	)
}

export default AuthProvider
