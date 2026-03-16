import HomeFeatures from '@/components/home/home.features'
import HomeHero from '@/components/home/home.hero'
import HowItWorks from '@/components/ui/howItWorks/howItWorks'
import HomeSpecialized from '@/components/home/home.specialized'
import HomeWhyChooseUs from '@/components/home/home.whyChooseUs'
import Cta from '@/components/ui/cta/cta'
import Faq from '@/components/ui/faq/faq'
import Plan from '@/components/ui/plan/plan'
import Testimonials from '@/components/ui/testimonials/testimonials'

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />

      <HowItWorks />

      <HomeSpecialized />

      <HomeFeatures />

      <HomeWhyChooseUs />

      <Plan />

      <Testimonials />

      <Faq />

      <Cta />
    </section>
  )
}
