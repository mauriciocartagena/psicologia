import React from 'react'
import { Aside } from './Aside'
import { Header } from './Header'

export const Layout = () => {
    return (
        <section id="container">
            <Header />
            <Aside />
            <section 
                id="main-content" 

                // className="merge-left" 
                >
                <section className="wrapper">

                    <h1>Hello World</h1>

                </section>
            </section>
        </section>
    )
}
