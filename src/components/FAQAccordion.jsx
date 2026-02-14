'use client'

import { useState } from 'react'

const faqs = [
  { question: 'What is Clipscutter?', answer: 'Clipscutter is an online tool that allows users to easily trim and download video clips from their favourite YouTube videos by simply entering a URL.' },
  { question: 'What formats and qualities are supported?', answer: 'Clipscutter supports MP4 and WEBM video formats and MP3 and M4A audio formats. Depending on the video selected, you can download up to 4K quality videos.' },
  { question: 'How long does it take to process my clips?', answer: 'Clip processing is typically very fast, taking just a few seconds to a minute, depending on the video length and server load.' },
  { question: 'Can I share my clipped videos directly from Clipscutter?', answer: 'While Clipscutter does not have a built-in sharing feature, you can easily download your clips and share them on social media or other platforms.' },
  { question: 'Can I close the browser while my clip is being generated?', answer: "Yes, since clip generation happens on our servers, you can safely close the browser once the process has started. Your clip will be ready for download the next time you visit." },
  { question: 'How long will my clips be available for download?', answer: 'Your clips will be available for 24 hours after generation. After that, they will be automatically removed. Be sure to download them within this time to avoid losing them.' },
  { question: 'Can I cut multiple clips from the same video?', answer: 'Yes, you can cut as many clips as you like from the same video. Just input the video URL, set the time range, and create each clip individually.' },
  { question: 'How can I provide feedback or suggestions?', answer: "We love hearing from our users! You can send your feedback and suggestions through our contact form on the website or email us directly." },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">FAQ&apos;s</h2>
            <p className="text-gray-600">
              Got questions? Our FAQs cover everything you need to know about using Clipscutter, from video format support to troubleshooting tips, get the answers you need today.
            </p>
          </div>
          <div className="md:col-span-3">
            <ul className="space-y-4">
              {faqs.map((faq, index) => (
                <li key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center gap-4 text-left hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      className={`w-6 h-6 shrink-0 transition-transform ${openIndex === index ? 'rotate-90' : ''}`}
                      style={{ color: '#5271FF' }}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12Z" />
                    </svg>
                    <h5 className="font-semibold text-gray-800 flex-1">{faq.question}</h5>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-5 pl-16">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
