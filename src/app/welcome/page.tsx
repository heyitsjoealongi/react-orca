'use client'

//// React

//// Packages
import { useRecoilValue } from 'recoil'
import { redirect } from 'next/navigation'

//// Types

//// Components
import HeaderMenuC from '../components/menu/HeaderMenuC'
import FooterMenuC from '../components/menu/FooterC'
import IntroductionExtraWelcomeC from '../components/welcome/IntroductionExtraWelcomeC'

//// Middleware & Integrations
import { accountState } from './../recoil/atoms/accountAtom'

//// Application
export default function WelcomeP() {
    const accountStatus = useRecoilValue(accountState)
    if (accountStatus === 'authenticated') {
        return (
            <main>
                <HeaderMenuC />
                <IntroductionExtraWelcomeC />
                <FooterMenuC />
            </main>
        )
    } else {
        return redirect('/')
    }
}

//// System
