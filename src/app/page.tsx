'use client'

//// React

//// Packages
import { useRecoilState, useRecoilValue } from 'recoil'
import { redirect } from 'next/navigation'

//// Types

//// Components
import HeaderC from './components/menu/HeaderMenuC'
import FooterMenuC from './components/menu/FooterC'
import IntroductionExtraAccountC from './components/account/IntroductionExtraAccountC'
import AccountDC from './components/account/AccountDC'

//// Middleware & Integrations
import { accountState } from './recoil/atoms/accountAtom'

//// Application
export default function HomeP() {
    const [account, setAccount] = useRecoilState(accountState)
    async function switchToSignInF() {
        try {
            return setAccount('signin')
        } catch (error) {
            console.log('error setting account to sign in:', error)
        }
    }
    async function switchToSignUpF() {
        try {
            return setAccount('signup')
        } catch (error) {
            console.log('error setting account to sign up:', error)
        }
    }
    const accountStatus = useRecoilValue(accountState)
    if (accountStatus !== 'authenticated') {
        return (
            <main>
                <HeaderC />
                <IntroductionExtraAccountC />
                <div className="dynamic">
                    <AccountDC />
                    <div className="dynamic-button-group">
                        <button
                            className="button"
                            type="button"
                            onClick={() => switchToSignInF()}
                        >
                            Sign in
                        </button>
                        <button
                            className="button"
                            type="button"
                            onClick={() => switchToSignUpF()}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
                <FooterMenuC />
            </main>
        )
    } else {
        return redirect('/welcome')
    }
}

//// System
