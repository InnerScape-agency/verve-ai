import HeroBg from '@/assets/feature-pages/hero/coding-interview-hero.png'
import FeatureCodingWorkflow from '@/components/features/feature.codingWorkflow'
import FeatureHightLights from '@/components/features/feature.highLights'
import FeatureInterviewMadeEasy from '@/components/features/feature.interviewMadeEasy'
import OurFeature from '@/components/features/feature.ourAiFeature'
import FeatureSpecialized from '@/components/features/feature.specialized'
import FeatureCTA from '@/components/features/features.cta'
import FeatureHero from '@/components/features/features.hero'
import Undetectable from '@/components/features/features.undetectable'
import LeetcodeCTA from '@/components/features/leetcodeCta'
import Cta from '@/components/ui/cta/cta'
import Faq from '@/components/ui/faq/faq'
import HowItWorks from '@/components/ui/howItWorks/howItWorks'

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FeatureHero
        badge="100%"
        badgeSemiTitle="AI for tech interviews"
        heading="Live AI Support for Every Coding Interview"
        description="Real-time assistance on CoderPad, whiteboards, and any collaborative coding platform you use."
        heroImage={HeroBg}
      />

      <HowItWorks />

      <Undetectable />

      <LeetcodeCTA />

      <FeatureCodingWorkflow />

      <FeatureInterviewMadeEasy />

      <Faq />

      <Cta varient="withImage" />
    </section>
  )
}
