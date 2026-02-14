'use client'

export default function Footer({ showGetStarted = true }) {
  return (
    <footer className="bg-white border-t border-gray-200">
      {showGetStarted && (
        <div className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-800">Ready to get started?</h2>
              </div>
              <div className="flex justify-center md:justify-end">
                <a
                  href="#hero-form"
                  className="px-10 py-4 text-white font-bold rounded-full hover:opacity-90 transition-opacity uppercase"
                  style={{ backgroundColor: '#5271FF' }}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <div id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <ul className="space-y-3">
            <li><a href="/privacy-policy" className="text-gray-600 hover:text-[#5271FF] font-medium transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="text-gray-600 hover:text-[#5271FF] font-medium transition-colors">Terms of service</a></li>
            <li><a href="/disclaimer" className="text-gray-600 hover:text-[#5271FF] font-medium transition-colors">Disclaimer</a></li>
            <li><a href="/refund-policy" className="text-gray-600 hover:text-[#5271FF] font-medium transition-colors">Refund Policy</a></li>
          </ul>
          <ul className="space-y-3">
            <li><a href="/contact" className="text-gray-600 hover:text-[#5271FF] font-medium transition-colors">Contact Us</a></li>
            <li><a href="/feedback" className="text-gray-600 hover:text-[#5271FF] font-medium transition-colors">Feedback</a></li>
          </ul>
          <div className="col-span-2 md:col-span-1" />
        </div>
        <p className="text-center text-gray-500 text-sm">
          ClipsCutter.com® | Copyright 2026. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
