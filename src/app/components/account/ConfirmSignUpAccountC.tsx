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
import { ConfirmSignUpT } from '../../types/Account'

//// Components

//// Middleware & Integrations
import { accountState } from '../../recoil/atoms/accountAtom'

//// Amplify
import { confirmSignUp } from 'aws-amplify/auth'
// import outputs from '../../../../amplify_outputs.json'
// Amplify.configure(outputs)

//// Application
async function confirmSignUpF(values: ConfirmSignUpT) {
    try {
        const { username, confirmationcode } = values
        const user = await confirmSignUp({
            username: username,
            confirmationCode: confirmationcode,
        })
        return user
    } catch (error) {
        console.log('error confirming signing up:', error)
    }
}
export default function ConfirmSignUpAccountC() {
    const [account, setAccount] = useRecoilState(accountState)
    const formik = useFormik({
        initialValues: {
            username: '',
            confirmationcode: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().email().required(),
            confirmationcode: Yup.string().min(6).required(),
        }),
        onSubmit: async (values) => {
            try {
                const user = await confirmSignUpF(values)
                if (user?.['isSignUpComplete']) {
                    setAccount('signin')
                    redirect('/')
                }
            } catch (error) {
                console.log('error confirming signing up:', error)
            }
        },
    })
    return (
        <>
            <div className="flex-column">
                <h2 className="flex-column-item">Confirm Sign Up</h2>
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
                        <label htmlFor="confirmationcode">
                            Confirmation Code
                        </label>
                        <span className="error">
                            {formik?.errors?.confirmationcode}
                        </span>
                        <input
                            id="confirmationcode"
                            name="confirmationcode"
                            type="confirmationcode"
                            value={formik?.values?.confirmationcode}
                            onChange={formik.handleChange}
                        />
                        <button className="button" type="submit" value="submit">
                            Confirm sign up
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

//// System
