import Navbar from '../components/Navbar'
import HeroCutterForm from '../components/HeroCutterForm'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorks from '../components/HowItWorks'
import WhyClipscutter from '../components/WhyClipscutter'
import UseCasesGrid from '../components/UseCasesGrid'
import FAQAccordion from '../components/FAQAccordion'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1">
        <section id="clips" className="pt-16 sm:pt-24 pb-24 px-6 scroll-mt-20 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Youtube Video Cutter
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto mb-12 leading-relaxed">
              Skip the hassle of downloading full videos. Just get your favourite clip by selecting time duration in this online tool.
            </p>
            <div id="hero-form" className="scroll-mt-24">
              <HeroCutterForm />
            </div>
          </div>
        </section>
        <FeaturesSection />
        <HowItWorks />
        <WhyClipscutter />
        <UseCasesGrid />
        <FAQAccordion />
        <Footer />
      </main>
    </div>
  )
}
