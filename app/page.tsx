import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export default function Home() {
  return (
    <main className="pt-14">
      <Navbar />
      <div id="hero">
        {/* HeroSection — Phase 3 */}
      </div>
      {/* ResultsDialog — Phase 4 */}
      <div id="how-it-works">
        {/* HowItWorksSection — Phase 5 */}
      </div>
      {/* SupportedCropsSection — Phase 5 */}
      {/* WhyPlantleySection — Phase 5 */}
      <div id="faq">
        {/* FAQSection — Phase 5 */}
      </div>
      <Footer />
    </main>
  )
}
