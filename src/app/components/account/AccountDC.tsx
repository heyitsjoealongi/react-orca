'use client'

//// React
import * as React from 'react'

//// Packages
import { useRecoilValue } from 'recoil'

//// Types

//// Components
import SignInC from './SignInAccountC'
import SignUpC from './SignUpAccountC'
import ConfirmSignUpC from './ConfirmSignUpAccountC'
import ReConfirmSignUpC from './ReConfirmSignUpAccountC'

//// Middleware & Integrations
import { accountState } from '../../recoil/atoms/accountAtom'

//// Application
export default function AccountDC() {
    const account = useRecoilValue(accountState)
    if (account === 'reconfirm') {
        return <ReConfirmSignUpC />
    } else if (account === 'confirm') {
        return <ConfirmSignUpC />
    } else if (account === 'signup') {
        return <SignUpC />
    } else if (account === 'signin') {
        return <SignInC />
    }
}

//// System
