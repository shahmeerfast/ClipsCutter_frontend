'use client'

import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    duration: 'For Lifetime',
    features: [
      'Mp4 video format',
      'M4a audio format',
      'Up to 360p video resolution',
      '2 concurrent clips processing',
      'Unlimited monthly downloads',
      'Access to Geo-Blocked Videos',
      'Blazing-Fast server',
    ],
    cta: 'Get Started',
    accent: 'border-gray-200',
  },
  {
    name: 'Premium',
    price: '$4.99',
    period: '/month',
    duration: 'For 3 Months',
    features: [
      'Including all features of free plan',
      'Mp3 & M4a audio formats',
      'Up to 1080p video resolution',
      '6 concurrent clips processing',
      'Priority support',
    ],
    cta: 'Start 7-Day Free Trial',
    note: 'No credit card required',
    accent: 'border-[#5271FF]',
  },
]

export default function PricingPage() {
  const router = useRouter()

  const handleButtonClick = (planName) => {
    if (planName === 'Free') {
      router.push('/')
    }
    // Add other navigation logic for Premium plan if needed
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="pt-16 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">Our Pricing & Plans</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan to fit your needs and budget – simple, flexible, and built just for you!
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl border ${plan.accent} shadow-sm p-8 flex flex-col`}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{plan.name}</h3>
                </div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-500 pb-1">{plan.period}</span>
                </div>
                <div className="text-sm text-gray-600 mb-6">{plan.duration}</div>
                <ul className="space-y-2 text-sm text-gray-600 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-gray-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className={`mt-auto ${plan.note ? '-mt-1' : ''}`}>
                  <button
                    type="button"
                    onClick={() => handleButtonClick(plan.name)}
                    className="w-full py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#5271FF' }}
                  >
                    {plan.cta}
                  </button>
                  {plan.note ? (
                    <div className="text-sm text-gray-600 mt-2 flex items-center gap-2">
                      <span>✨</span>
                      <span>{plan.note}</span>
                    </div>
                  ) : (
                    <div className="h-[21px] mt-2"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer showGetStarted={false} />
    </div>
  )
}
