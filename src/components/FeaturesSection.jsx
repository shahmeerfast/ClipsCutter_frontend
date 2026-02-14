'use client'

import { useState } from 'react'

function FeatureCard({ feature }) {
  const [imgSrc, setImgSrc] = useState(feature.image)
  return (
    <div className="bg-white rounded-2xl overflow-visible shadow-lg border border-gray-100">
      <h4 className="text-xl font-bold text-gray-800 px-6 pt-6 pb-2">{feature.title}</h4>
      <p className="text-gray-600 px-6 pb-4 text-sm">{feature.subtitle}</p>
      <div className="relative px-4 pb-4">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
          <img
            src={imgSrc}
            alt={`${feature.title} feature`}
            className="w-full h-full object-cover"
            onError={() => setImgSrc(feature.fallback)}
          />
          <div
            className="absolute bottom-3 left-4 right-4 md:right-auto md:max-w-[90%] bg-white rounded-xl px-4 py-3 z-10 translate-y-2"
            style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.12)' }}
          >
            <p className="text-gray-700 text-sm font-medium leading-snug">
              {feature.overlay}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const features = [
  {
    title: 'Quick Processing',
    subtitle: 'Lightning fast processing for effortless clip cutting',
    overlay: 'Seamless cutting, instant results for your favorite clips',
    image: 'https://www.clipscutter.com/images/feature-quick-processing.png',
    fallback: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=280&fit=crop',
  },
  {
    title: 'HD Quality',
    subtitle: 'Download your clips in pristine HD quality formats',
    overlay: 'Get high definition downloads for your favorite clips',
    image: 'https://www.clipscutter.com/images/feature-hd-quality.png',
    fallback: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=280&fit=crop',
  },
  {
    title: 'Clean Interface',
    subtitle: 'Enjoy a simple, user-friendly interface for easy cutting',
    overlay: 'Streamlined design for a smooth and intuitive experience',
    image: 'https://www.clipscutter.com/images/feature-clean-interface.png',
    fallback: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=280&fit=crop',
  },
  {
    title: 'Bandwidth Saving',
    subtitle: 'Save bandwidth while downloading your favorite clips',
    overlay: 'Smart downloads that minimize bandwidth usage',
    image: 'https://www.clipscutter.com/images/feature-bandwidth-saving.png',
    fallback: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=280&fit=crop',
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Features</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features that simplify and supercharge your workflow
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
