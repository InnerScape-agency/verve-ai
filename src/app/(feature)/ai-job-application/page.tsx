import HeroBg from '@/assets/feature-pages/hero/ai-job-application.png'
import FeatureCareerAgent from '@/components/features/feature.careerAgent'
import FeatureCodingWorkflow from '@/components/features/feature.codingWorkflow'
import FeatureInterviewMadeEasy from '@/components/features/feature.interviewMadeEasy'
import FeatureInterviewSupport from '@/components/features/feature.interviewSupport'
import FeatureHero from '@/components/features/features.hero'
import Cta from '@/components/ui/cta/cta'
import Faq from '@/components/ui/faq/faq'
import HowItWorks from '@/components/ui/howItWorks/howItWorks'

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FeatureHero
        badge="AI Specialist"
        badgeSemiTitle="Best value premium"
        heading="Still Doing Manual Job Search? Meet AI Job Agent"
        description="Scans the internet 24/7 for roles that truly fit, so you never miss the one that matters"
        heroImage={HeroBg}
        width="max-w-[930px]"
        desWidth="max-w-full"
        imageHeight="h-fit"
        badges={['Auto Search', 'Auto Apply', '30+ Sources']}
        isClients
        isBadges
      />

      <FeatureCareerAgent />

      <HowItWorks />

      <FeatureInterviewMadeEasy />

      <Faq />

      <Cta varient="withImage" />
    </section>
  )
}
