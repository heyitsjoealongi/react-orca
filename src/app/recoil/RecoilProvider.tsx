'use client'

//// React
import * as React from 'react'

//// Packages
import { RecoilRoot } from 'recoil'

//// Types

//// Components

//// Middleware & Integrations

//// Application
export default function RecoilProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return <RecoilRoot>{children}</RecoilRoot>
}

//// System
