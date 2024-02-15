/* eslint-disable react/no-unescaped-entities */
import { Header } from '@/components/header'
import { AboutSection } from '@/components/aboutSection'
import { ServicesSection } from '@/components/serviceSection'
import { ContactSection } from '@/components/contactSection'
import { HomeSection } from '@/components/homeSection'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section id="home">
          <HomeSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}
