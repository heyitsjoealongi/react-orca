//// React
import * as React from 'react'

//// Packages
import Link from 'next/link'

//// Types

//// Components

//// Middleware & Integrations

//// Application
export default function IntroductionExtraWelcomeC() {
    return (
        <>
            <section>
                <div className="flex-column introduction">
                    <h1 className="flex-column-item">Welcome</h1>
                    <h3 className="flex-column-item">
                        Enjoy all of the benefits that your community account
                        provides today.
                    </h3>
                    <div className="flex-column-item introduction-content">
                        <p>
                            Our community is currently being developed, thank
                            you for signing up, check back soon for the latest
                            community updates and benefits.
                        </p>
                    </div>
                    <div className="flex-column-item">
                        <Link
                            className="button"
                            href="https://x.com/heyitsjoealongi"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label=""
                            type="link"
                        >
                            Follow me for updates
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

//// System
