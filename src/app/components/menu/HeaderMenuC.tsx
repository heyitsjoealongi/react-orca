//// React
import * as React from 'react'

//// Packages
import Link from 'next/link'
import Image from 'next/image'

//// Types

//// Components
import OrcaLogo from '../../images/svg/OrcaLogo.svg'

//// Middleware & Integrations

//// Application
export default function HeaderMenuC() {
    return (
        <>
            <header id="masthead" className="site-header">
                <div className="flex-row site-heading">
                    <div id="site-branding" className="flex-row-item">
                        <Link
                            className=""
                            href="https://example.com/"
                            target="_self"
                            rel="noreferrer noopener"
                            aria-label="React Orca Link"
                            type="link"
                        >
                            <Image
                                src={OrcaLogo}
                                loading="lazy"
                                width={50}
                                height={50}
                                alt="React Orca Logo"
                            />
                        </Link>
                    </div>
                    <nav
                        id="site-navigation"
                        className="main-navigation flex-row-item"
                    >
                        <ul className="flex-row">
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="https://example.com/"
                                    target="_self"
                                    rel="noreferrer noopener"
                                    aria-label="Home Navigation Link"
                                    type="link"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="https://example.com/about/"
                                    target="_self"
                                    rel="noreferrer noopener"
                                    aria-label="About Navigation Link"
                                    type="link"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="https://example.com/articles/"
                                    target="_self"
                                    rel="noreferrer noopener"
                                    aria-label="Articles Navigation Link"
                                    type="link"
                                >
                                    Articles
                                </Link>
                            </li>
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="/"
                                    target="_self"
                                    rel="noreferrer noopener"
                                    aria-label="Account Navigation Link"
                                    type="link"
                                >
                                    Account
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

//// System
