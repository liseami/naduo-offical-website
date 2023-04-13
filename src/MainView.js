import Header from './Views/Header'
import Fotter from './Views/Fotter'
import Feature from './Views/Feature'
import Newsletter from './Views/Newsletter'
import Point from './Views/Point'
import Testimonials from './Views/Testimonials'
import Hero from './Views/Hero'

export default function MainView() {
    return (
        <div className="bg-white">
            {/* Header */}
            <Header></Header>
            <main>
                {/* Hero section */}
                <Hero></Hero>
                {/* Feature section */}
                <Feature></Feature>
                {/* Feature section */}
                <Point></Point>
                {/* Testimonials section */}
                <Testimonials></Testimonials>
            </main>
            {/* Footer */}
            <Fotter></Fotter>
        </div>
    )
}
