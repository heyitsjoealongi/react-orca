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
            console.log('error setting account to signin:', error)
        }
    }
    async function switchToSignUpF() {
        try {
            return setAccount('signup')
        } catch (error) {
            console.log('error setting account to signup:', error)
        }
    }
    async function switchToReConfirmF() {
        try {
            return setAccount('reconfirm')
        } catch (error) {
            console.log('error setting account to reconfirm:', error)
        }
    }
    const accountStatus = useRecoilValue(accountState)
    if (accountStatus !== 'authenticated') {
        return (
            <main>
                <HeaderC />
                <IntroductionExtraAccountC />
                <section>
                    <AccountDC />
                    <div className="flex-row dynamic-button-group">
                        <button
                            className="flex-row-item button"
                            type="button"
                            onClick={() => switchToSignInF()}
                        >
                            Sign in
                        </button>
                        <button
                            className="flex-row-item button"
                            type="button"
                            onClick={() => switchToSignUpF()}
                        >
                            Sign up
                        </button>
                    </div>
                    <p>
                        If you looking to resume your sign-up confirmation,
                        click{' '}
                        <a onClick={() => switchToReConfirmF()}>
                            here to restart the process
                        </a>
                        , when the form appears, enter your username/email.
                    </p>
                </section>
                <FooterMenuC />
            </main>
        )
    } else {
        return redirect('/welcome')
    }
}

//// System
