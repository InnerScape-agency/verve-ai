import FreeToolsHero from '@/components/freeTools/freeTools.hero'
import HeroImage from '@/assets/free-tools/hero/ai-resume-checker.png'
import FeatureInterviewMadeEasy from '@/components/features/feature.interviewMadeEasy'
import HowItWorks from '@/components/ui/howItWorks/howItWorks'
import Testimonials from '@/components/ui/testimonials/testimonials'
import Faq from '@/components/ui/faq/faq'
import Cta from '@/components/ui/cta/cta'
import FreeHotTools from '@/components/freeTools/free.hotTools'
import FreeToolCards from '@/components/freeTools/freeToolCards'

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FreeToolsHero
        badgeSemiTitle="AI Resume Checker"
        heading="Beat The ATS And Land Interviews"
        description="Instantly scan your resume for formatting errors and missing keywords that cause automated rejection."
        btnText="Scan My Resume Free"
        btnLink="#"
        heroImage={HeroImage}
        width="max-w-140"
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
