/* eslint-disable react/no-unescaped-entities */
import { Header } from '@/components/Header/header'
import { AboutSection } from '@/components/Sections/aboutSection'
import { ServicesSection } from '@/components/Sections/serviceSection'
import { ContactSection } from '@/components/Sections/contactSection'
import { HomeSection } from '@/components/Sections/homeSection'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <HomeSection />
        </section>

        <section id="apresentação">
          <AboutSection />
        </section>

        <section id="representantes">
          <ServicesSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
      </main>
    </div>
  )
}
