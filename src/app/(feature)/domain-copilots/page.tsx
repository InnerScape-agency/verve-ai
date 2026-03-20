import FeatureCareerAgent from '@/components/features/feature.careerAgent'
import FeatureInterviewMadeEasy from '@/components/features/feature.interviewMadeEasy'
import FeatureHero from '@/components/features/features.hero'
import Cta from '@/components/ui/cta/cta'
import Faq from '@/components/ui/faq/faq'
import HeroBG from '@/assets/gradient/hero-2.png'
import Testimonials from '@/components/ui/testimonials/testimonials'
import FeatureDomainCopilot from '@/components/features/feature.domainCopilot'

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FeatureHero
        badge="Domain Copilots"
        badgeSemiTitle="Expert-Level Support"
        heading="Choose Your Interview Copilot By Job Role"
        description="Powered by deep industry knowledge and expert resources for accurate, role-specific guidance"
        width="max-w-[930px]"
        desWidth="max-w-[522px]"
        imageHeight="h-fit"
        badges={['Domain expertise', 'Precision answers', 'Expert-level guidance']}
        isBadges
        heroBGImage={HeroBG}
      />

      <FeatureDomainCopilot />

      <Testimonials />

      <FeatureCareerAgent />

      <Faq />

      <FeatureInterviewMadeEasy />

      <Cta varient="withImage" />
    </section>
  )
}
