
import { useState } from 'react'

import Header from './Header'
import Fotter from './Fotter'
import Feature from './Feature'
import Newsletter from './Newsletter'
import Point from './Point'
import Testimonials from './Testimonials'


import Hero from './Hero'





export default function MainView() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="bg-white">
            {/* Header */}
            <Header></Header>
            <main>
                {/* Hero section */}
                <Hero></Hero>

                {/* Feature section */}
                {/* <Feature></Feature> */}

                {/* Feature section */}
                <Point></Point>

                {/* Newsletter section */}
                <Newsletter></Newsletter>
                {/* Testimonials section */}
                <Testimonials></Testimonials>
            </main>
            {/* Footer */}
            <Fotter></Fotter>
        </div>
    )
}
