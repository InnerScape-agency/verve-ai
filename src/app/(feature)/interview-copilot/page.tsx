import HeroBg from '@/assets/feature-pages/hero/interview-copilot-hero.png'
import FeatureHightLights from '@/components/features/feature.highLights'
import FeatureInterviewMadeEasy from '@/components/features/feature.interviewMadeEasy'
import OurFeature from '@/components/features/feature.ourAiFeature'
import FeatureSpecialized from '@/components/features/feature.specialized'
import FeatureCTA from '@/components/features/features.cta'
import FeatureHero from '@/components/features/features.hero'
import Undetectable from '@/components/features/features.undetectable'
import Cta from '@/components/ui/cta/cta'
import Faq from '@/components/ui/faq/faq'
import HowItWorks from '@/components/ui/howItWorks/howItWorks'

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FeatureHero
        badge="100%"
        badgeSemiTitle="It's undetectable. Here's why! "
        heading="Crack Interview with Personalized Support"
        description="We provide a curated collection of rights-cleared training data sourced from verified contributors."
        heroImage={HeroBg}
      />

      <HowItWorks />

      <Undetectable />

      <FeatureCTA />

      <OurFeature />

      <FeatureHightLights />

      <FeatureSpecialized />

      <FeatureInterviewMadeEasy />

      <Faq />

      <Cta />
    </section>
  )
}
