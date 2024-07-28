'use client'

//// React
import * as React from 'react'

//// Packages
import { Amplify } from 'aws-amplify'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRecoilState } from 'recoil'
import { redirect } from 'next/navigation'

//// Types
import { SignInT } from '../../types/Account'

//// Components

//// Middleware & Integrations
import { accountState } from '../../recoil/atoms/accountAtom'

//// Amplify
import { signIn } from 'aws-amplify/auth'
// import outputs from '../../../../amplify_outputs.json'
// Amplify.configure(outputs)

//// Application
async function signInAccountF(values: SignInT) {
    try {
        const { username, password } = values
        const user = await signIn({
            username: username,
            password: password,
        })
        return user
    } catch (error) {
        console.log('error signing in:', error)
        if (
            error?.toString() ===
            'UserAlreadyAuthenticatedException: There is already a signed in user.'
        ) {
            return { isSignedIn: true }
        }
    }
}
export default function SignInAccountC() {
    const [account, setAccount] = useRecoilState(accountState)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().email().required(),
            password: Yup.string().min(8).required(),
        }),
        onSubmit: async (values) => {
            try {
                const user = await signInAccountF(values)
                if (user?.['isSignedIn']) {
                    setAccount('authenticated')
                    redirect('/welcome')
                }
            } catch (error) {
                console.log('error signing in:', error)
            }
        },
    })
    return (
        <>
            <div className="flex-column">
                <h2 className="flex-column-item">Sign In</h2>
                <div className="flex-column-item">
                    <form
                        className="signup-form"
                        onSubmit={formik.handleSubmit}
                    >
                        <label htmlFor="username">Username/Email</label>
                        <span className="error">
                            {formik?.errors?.username}
                        </span>
                        <input
                            id="username"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                        <label htmlFor="password">Password</label>
                        <span className="error">
                            {formik?.errors?.password}
                        </span>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formik?.values?.password}
                            onChange={formik.handleChange}
                        />
                        <button className="button" type="submit" value="submit">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

//// System
