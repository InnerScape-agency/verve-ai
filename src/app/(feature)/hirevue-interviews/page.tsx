import HeroBg from '@/assets/feature-pages/hero/online-assesment-copilot.png'
import FeatureCodingWorkflow from '@/components/features/feature.codingWorkflow'
import FeatureInterviewMadeEasy from '@/components/features/feature.interviewMadeEasy'
import FeatureInterviewSupport from '@/components/features/feature.interviewSupport'
import FeatureQuestionBank from '@/components/features/feature.questionBank'
import FeatureHero from '@/components/features/features.hero'
import Cta from '@/components/ui/cta/cta'
import Faq from '@/components/ui/faq/faq'
import HowItWorks from '@/components/ui/howItWorks/howItWorks'

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FeatureHero
        badge="Hirevue Interviews"
        badgeSemiTitle="One-way interview support"
        heading="Ace HireVue Interviews with Real-Time AI Support"
        description="Beat time pressure and AI scoring with instant, natural responses tailored to you."
        heroImage={HeroBg}
        width="max-w-[830px]"
        imageHeight="h-fit"
        isClients
      />

      <HowItWorks />

      <FeatureCodingWorkflow />

      <FeatureInterviewSupport />

      <FeatureInterviewMadeEasy />

      <Faq />

      <Cta varient="withImage" />
    </section>
  )
}
