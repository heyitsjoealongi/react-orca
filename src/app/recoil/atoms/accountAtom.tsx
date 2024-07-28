'use client'

//// React

//// Packages
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

//// Types

//// Components

//// Middleware & Integrations
const { persistAtom } = recoilPersist()

//// Application
export const accountState = atom({
    key: 'account', // unique ID (with respect to other atoms/selectors)
    default: 'signin', // default value (aka initial value)
    effects_UNSTABLE: [persistAtom],
})

//// System
