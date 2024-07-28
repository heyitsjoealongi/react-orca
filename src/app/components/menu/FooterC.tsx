//// React
import * as React from 'react'

//// Packages
import Link from 'next/link'
import Image from 'next/image'

//// Types

//// Components
import GitHubLogo from '../../images/svg/GitHubLogo.svg'
import LinkedInLogo from '../../images/svg/LinkedInLogo.svg'
import XLogo from '../../images/svg/XLogo.svg'
import InstagramLogo from '../../images/svg/InstagramLogo.svg'

//// Middleware & Integrations
const currentYear = () => {
    const date = new Date()
    if (date) {
        const year = date.getFullYear()
        if (year) {
            return year
        }
    }
}

//// Application
export default function FooterMenuC() {
    return (
        <>
            <footer>
                <div className="flex-column">
                    <div className="flex-column-item site-social">
                        <ul className="flex-row">
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="https://github.com/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="GitHub Social Link"
                                    type="link"
                                >
                                    <Image
                                        src={GitHubLogo}
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        alt="GitHub Logo"
                                    />
                                </Link>
                            </li>
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="LinkedIn Social Link"
                                    type="link"
                                >
                                    <Image
                                        src={LinkedInLogo}
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        alt="GitHub Logo"
                                    />
                                </Link>
                            </li>
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="https://x.com/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="X Social Link"
                                    type="link"
                                >
                                    <Image
                                        src={XLogo}
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        alt="X Logo"
                                    />
                                </Link>
                            </li>
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Instagram Social Link"
                                    type="link"
                                >
                                    <Image
                                        src={InstagramLogo}
                                        loading="lazy"
                                        width={50}
                                        height={50}
                                        alt="Instagram Logo"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-column-item site-contact">
                        <ul className="flex-row">
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="tel:11234567899"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Phone Contact Link"
                                    type="link"
                                >
                                    +1 (123) 456-7899
                                </Link>
                            </li>
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="mailto:email@email.com"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Email Contact Link"
                                    type="link"
                                >
                                    email@email.com
                                </Link>
                            </li>
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="https://www.google.com/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Google Maps Contact Link"
                                    type="link"
                                >
                                    City, ST
                                </Link>
                            </li>
                            <li className="flex-row-item">
                                <Link
                                    className=""
                                    href="https://example.com/privacy-policy/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label="Privacy Policy Contact Link"
                                    type="link"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-column-item site-copyright">
                        <p>&#x24B8; {currentYear()} React Orca</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

//// System
