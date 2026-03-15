import HomeFeatures from '@/components/home/home.features'
import HomeHero from '@/components/home/home.hero'
import HomeHowItWorks from '@/components/home/home.howItWorks'
import HomeSpecialized from '@/components/home/home.specialized'
import HomeWhyChooseUs from '@/components/home/home.whyChooseUs'

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />

      <HomeHowItWorks />

      <HomeSpecialized />

      <HomeFeatures />

      <HomeWhyChooseUs />
    </section>
  )
}
