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
import { ReConfirmSignUpT } from '../../types/Account'

//// Components

//// Middleware & Integrations
import { accountState } from '../../recoil/atoms/accountAtom'

//// Amplify
import { resendSignUpCode } from 'aws-amplify/auth'
// import outputs from '../../../../amplify_outputs.json'
// Amplify.configure(outputs)

//// Application
async function reConfirmSignUpAccountF(values: ReConfirmSignUpT) {
    try {
        const { username } = values
        const user = await resendSignUpCode({
            username: username,
        })
        return user
    } catch (error) {
        console.log('error reconfirming signing up:', error)
    }
}
export default function ReConfirmSignUpAccountC() {
    const [account, setAccount] = useRecoilState(accountState)
    const formik = useFormik({
        initialValues: {
            username: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().email().required(),
        }),
        onSubmit: async (values) => {
            try {
                const user = await reConfirmSignUpAccountF(values)
                if (user?.['destination']) {
                    setAccount('confirm')
                    redirect('/')
                }
            } catch (error) {
                console.log('error reconfirming signing up:', error)
            }
        },
    })
    return (
        <>
            <div className="flex-column">
                <h2 className="flex-column-item">Reconfirm Sign Up</h2>
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
                        <button className="button" type="submit" value="submit">
                            Reconfirm sign up
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

//// System
