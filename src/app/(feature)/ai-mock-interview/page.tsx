import HeroBg from '@/assets/feature-pages/hero/ai-mock-interview.png'
import FeatureInterviewMadeEasy from '@/components/features/feature.interviewMadeEasy'
import FeatureQuestionBank from '@/components/features/feature.questionBank'
import FeatureHero from '@/components/features/features.hero'
import Cta from '@/components/ui/cta/cta'
import Faq from '@/components/ui/faq/faq'
import HowItWorks from '@/components/ui/howItWorks/howItWorks'

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FeatureHero
        badge="Why Verve AI"
        badgeSemiTitle="Interactive simulation"
        heading="Mock with AI Recruiter of Your Dream Company"
        description="Practice real questions from top companies to test your skills and knowledge"
        heroImage={HeroBg}
        width="max-w-[830px]"
        imageHeight="h-fit"
        isClients
      />

      <HowItWorks />

      <FeatureQuestionBank />

      <FeatureInterviewMadeEasy />

      <Faq />

      <Cta varient="withImage" />
    </section>
  )
}
