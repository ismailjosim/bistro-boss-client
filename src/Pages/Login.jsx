import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import useAuth from '../Hooks/useAuth'

const inputStyle =
	'relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-primary focus-within:before:!scale-x-100 focus-within:invalid:before:bg-primary before:transition before:duration-300'

const Login = () => {
	const { googleProviderLogin, githubProviderLogin, userLogin } = useAuth()
	const [error, setError] = useState(null)

	const googleProvider = new GoogleAuthProvider()
	const githubProvider = new GithubAuthProvider()

	const navigate = useNavigate()
	const location = useLocation()
	const from = location.state?.from || '/'

	const navigateNow = () => {
		setTimeout(() => {
			navigate(from, { replace: true })
		}, 1)
	}

	const handleGoogleLogin = () => {
		googleProviderLogin(googleProvider)
			.then((res) => {
				const user = res.user
				if (user) {
					const saveUserInfo = {
						name: user ? user.displayName : 'User',
						email: user.email,
					}
					fetch(`${process.env.REACT_APP_SERVER_URL}/users`, {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
						},
						body: JSON.stringify(saveUserInfo),
					})
						.then((res) => res.json())
						.then((data) => {
							if (data.insertedId || data.message) {
								navigateNow()
							}
						})
				}
			})
			.catch((error) => {})
	}

	const handleGithubLogin = () => {
		githubProviderLogin(githubProvider)
			.then((res) => {
				const user = res.user
				if (user) {
					navigateNow()
				}
			})
			.catch((error) => {})
	}

	const handleUserLogin = (e) => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value
		userLogin(email, password)
			.then((res) => {
				const user = res.user
				if (user) {
					navigateNow()
				}
			})
			.catch((err) => setError(err.message))
	}

	return (
		<div className='m-auto xl:container px-12 sm:px-0 mx-auto'>
			<div className='mx-auto h-full sm:w-max'>
				<div className='m-auto py-12'>
					<div className='mt-12 rounded-md border bg-gray-50 border-gray-700 -mx-6 sm:-mx-10 p-8 sm:p-10'>
						<h3 className='text-2xl font-semibold text-neutral'>
							Login to your account
						</h3>
						<form
							onSubmit={handleUserLogin}
							className='mt-10 space-y-8 dark:text-white'
						>
							<div>
								<div className={inputStyle}>
									<input
										type='email'
										name='email'
										required
										placeholder='Your email or user name'
										className='w-full bg-transparent pb-3  border-b border-gray-300 outline-none invalid:border-primary transition text-primary'
									/>
								</div>
							</div>
							<div>
								<div className={inputStyle}>
									<input
										type='text'
										name='password'
										required
										placeholder='Your Password'
										className='w-full bg-transparent pb-3  border-b border-gray-300 outline-none invalid:border-primary transition text-primary'
									/>
								</div>
							</div>

							<div>
								<button
									type='submit'
									className='rounded-md bg-primary/80 text-white h-11 w-full flex items-center justify-center px-6 py-3 transition hover:bg-primary'
								>
									<span className='text-base font-semibold text-white uppercase'>
										Login
									</span>
								</button>
							</div>
						</form>
						<div className='flex justify-end mt-5'>
							<Link
								to={'/register'}
								state={{ from }}
								className='text-base text-neutral font-semibold hover:text-primary transition-all ease-in-out'
							>
								Create new account
							</Link>
						</div>
						<div className='divider'>OR</div>
						{error && <p className='text-error font-semibold mb-2'>{error}</p>}
						<div className='flex flex-wrap sm:grid gap-6 grid-cols-2'>
							<button
								onClick={handleGoogleLogin}
								className='w-full h-11 rounded-md border bg-white text-primary px-6 transition ease-in-out border-primary hover:bg-primary hover:text-white'
							>
								<div className='w-max mx-auto flex items-center justify-center space-x-4'>
									<BsGoogle></BsGoogle>
									<span className='block w-max text-sm font-semibold tracking-wide'>
										With Google
									</span>
								</div>
							</button>
							<button
								onClick={handleGithubLogin}
								className='w-full h-11 rounded-md border bg-white text-neutral px-6 transition ease-in-out border-neutral hover:bg-neutral hover:text-white'
							>
								<div className='w-max mx-auto flex items-center justify-center space-x-4'>
									<BsGithub></BsGithub>
									<span className='block w-max text-sm font-semibold tracking-wide'>
										With Github
									</span>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
