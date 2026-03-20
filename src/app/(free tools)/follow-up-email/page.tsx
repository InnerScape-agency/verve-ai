import FreeToolsHero from '@/components/freeTools/freeTools.hero'
import HeroImage from '@/assets/free-tools/hero/follow-up.png'
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
        badgeSemiTitle="Follow Up Email"
        heading="Follow-Up Email After an Interview"
        description="Following up after an interview is essential. It shows professionalism, keeps you memorable, and demonstrates enthusiasm."
        btnText="Write My Letter Free"
        btnLink="#"
        heroImage={HeroImage}
        width="max-w-210"
        desWidth="max-w-[750px]"
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
