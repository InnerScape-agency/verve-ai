import HomeHero from '@/components/home/home.hero'
import HomeHowItWorks from '@/components/home/home.howItWorks'

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <HomeHero />

      <HomeHowItWorks />
    </section>
  )
}
