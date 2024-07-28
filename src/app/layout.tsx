//// React

//// Packages
import type { Metadata } from 'next'
import { noto_sans } from './fonts'
import { GoogleAnalytics } from '@next/third-parties/google'
import './style.css'

//// Types

//// Components

//// Middleware & Integrations
import RecoilProvider from './recoil/RecoilProvider'

export const metadata: Metadata = {
    title: 'react orca',
    description:
        'Multi-page Application — Lightweight React app Powered by Next.js and AWS Amplify (Template)',
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'react orca',
        description:
            'Multi-page Application — Lightweight React app Powered by Next.js and AWS Amplify (Template)',
        url: 'https://example.com/',
        siteName: 'react orca',
        images: [
            {
                url: 'https://example.com/react-orca.png', // Must be an absolute URL
                width: 1920,
                height: 1080,
                alt: 'react orca social image',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'react orca',
        description:
            'Multi-page Application — Lightweight React app Powered by Next.js and AWS Amplify (Template)',
        creator: '@orca',
        images: ['https://example.com/react-orca.png'], // Must be an absolute URL
    },
}

//// Application
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className={`${noto_sans.variable}`}>
            <body>
                <div id="orca">
                    <RecoilProvider>{children}</RecoilProvider>
                </div>
            </body>
            <GoogleAnalytics gaId="" />
        </html>
    )
}

//// System
