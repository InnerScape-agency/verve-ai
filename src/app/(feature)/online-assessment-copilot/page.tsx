import HeroBg from '@/assets/feature-pages/hero/online-assesment-copilot.png'
import FeatureCodingWorkflow from '@/components/features/feature.codingWorkflow'
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
        badge="Online Assessment"
        badgeSemiTitle="Premium at best price"
        heading="Online Assessment Copilot"
        description="Undetectable plug-in that automatically snap and solve any question on your screen"
        heroImage={HeroBg}
        width="max-w-[830px]"
        imageHeight="h-fit"
        isClients
      />

      <HowItWorks />

      <FeatureCodingWorkflow />

      <FeatureInterviewMadeEasy />

      <Faq />

      <Cta varient="withImage" />
    </section>
  )
}
