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
import { SignUpT } from '../../types/Account'

//// Components

//// Middleware & Integrations
import { accountState } from '../../recoil/atoms/accountAtom'

//// Amplify
import { signUp } from 'aws-amplify/auth'
// import outputs from '../../../../amplify_outputs.json'
// Amplify.configure(outputs)

//// Application
async function signUpAccountF(values: SignUpT) {
    try {
        const { username, password } = values
        const user = await signUp({
            username: username,
            password: password,
            options: {
                userAttributes: {
                    email: username,
                },
            },
        })
        return user
    } catch (error) {
        console.log('error signing up:', error)
        if (
            error?.toString() === 'UsernameExistsException: User already exists'
        ) {
            return { isSignUpComplete: true }
        }
    }
}
export default function SignUpAccountC() {
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
                const user = await signUpAccountF(values)
                if (!user?.['isSignUpComplete']) {
                    setAccount('confirm')
                    redirect('/')
                } else if (user?.['isSignUpComplete']) {
                    setAccount('signin')
                    redirect('/')
                }
            } catch (error) {
                console.log('error signing up:', error)
            }
        },
    })
    return (
        <>
            <div className="flex-column">
                <h2 className="flex-column-item">Sign Up</h2>
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
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

//// System
