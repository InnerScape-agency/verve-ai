import FreeToolsHero from '@/components/freeTools/freeTools.hero'
import HeroImage from '@/assets/free-tools/hero/ai-resume-builder.png'

export default function page() {
  return (
    <section className="flex flex-col items-center justify-center">
      <FreeToolsHero
        badgeSemiTitle="AI Resume Builder"
        heading="AI Resume Builder"
        description="Harnesses the power of AI to create, optimize, and personalize your resume in no-time"
        btnText="Free Forever"
        btnLink="#"
        heroImage={HeroImage}
      />
    </section>
  )
}
