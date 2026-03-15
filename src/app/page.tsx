import HomeFeatures from '@/components/home/home.features'
import HomeHero from '@/components/home/home.hero'
import HomeHowItWorks from '@/components/home/home.howItWorks'
import HomeSpecialized from '@/components/home/home.specialized'
import HomeWhyChooseUs from '@/components/home/home.whyChooseUs'
import Cta from '@/components/ui/cta/cta'
import Faq from '@/components/ui/faq/faq'

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />

      <HomeHowItWorks />

      <HomeSpecialized />

      <HomeFeatures />

      <HomeWhyChooseUs />

      <Faq />

      <Cta />
    </section>
  )
}
