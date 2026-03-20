import FreeToolsHero from '@/components/freeTools/freeTools.hero'
import HeroImage from '@/assets/free-tools/hero/ai-cover-latter-builder.png'
import FeatureInterviewMadeEasy from '@/components/features/feature.interviewMadeEasy'
import Testimonials from '@/components/ui/testimonials/testimonials'
import Faq from '@/components/ui/faq/faq'
import Cta from '@/components/ui/cta/cta'
import FreeHotTools from '@/components/freeTools/free.hotTools'
import FreeToolCards from '@/components/freeTools/freeToolCards'

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FreeToolsHero
        badgeSemiTitle="AI Cover Letter Builder"
        heading="Generate Tailored Cover Letters In Seconds"
        description="Create professional, persuasive cover letters that highlight your skills and match specific job requirements instantly."
        btnText="Write My Letter Free"
        btnLink="#"
        heroImage={HeroImage}
        width="max-w-200"
        desWidth="max-w-160"
      />

      <FreeToolCards />

      <FeatureInterviewMadeEasy varient="dark" />

      <FreeHotTools />

      <Faq />

      <Testimonials />

      <Cta varient="withImage" />
    </section>
  )
}
