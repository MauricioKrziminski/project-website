/* eslint-disable react/no-unescaped-entities */
import { Header } from '@/components/Header/header'
import { PresentationSection } from '@/components/Sections/presentationSection'
import { RepresentativesSection } from '@/components/Sections/representativesSection'
import { ContactSection } from '@/components/Sections/contactSection'
import { HomeSection } from '@/components/Sections/homeSection'
// import { RedesSection } from '@/components/Sections/redesSection'
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
          <PresentationSection />
        </section>

        <section id="representantes">
          <RepresentativesSection />
        </section>

        {/* <section id="redes">
          <RedesSection />
        </section> */}

        <section id="contact">
          <ContactSection />
        </section>

        <Footer />
      </main>
    </div>
  )
}
