import FreeToolsHero from '@/components/freeTools/freeTools.hero'
import HeroImage from '@/assets/free-tools/hero/ai-email-generator.png'
import FeatureInterviewMadeEasy from '@/components/features/feature.interviewMadeEasy'
import Testimonials from '@/components/ui/testimonials/testimonials'
import Faq from '@/components/ui/faq/faq'
import Cta from '@/components/ui/cta/cta'
import FreeHotTools from '@/components/freeTools/free.hotTools'
import FreeToolCards from '@/components/freeTools/freeToolCards'
import HomeWhyChooseUs from '@/components/home/home.whyChooseUs'

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FreeToolsHero
        badgeSemiTitle="AI Email Generator"
        heading="Secret Weapon for Lasting Impression"
        description="Great job on the interview! A thank you email can really make a difference. It shows professionalism and interest. Use our AI email generator to create the perfect message."
        btnText="Write My Letter Free"
        btnLink="#"
        heroImage={HeroImage}
        width="max-w-250"
        desWidth="max-w-220"
      />

      <FreeToolCards />

      <FeatureInterviewMadeEasy varient="dark" />

      <HomeWhyChooseUs />

      <Testimonials varient={'grid'} />

      <FreeHotTools varient="grid" />

      <Faq />

      <Cta varient="withImage" />
    </section>
  )
}
