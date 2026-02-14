'use client'

const steps = [
  { title: 'Add URL', description: 'Simply insert your video URL to start cutting your clips' },
  { title: 'Select Clip', description: "Choose your clip's time, quality, and preview with ease" },
  { title: 'Create', description: "Hit 'Create' to finalize your clip and bring it to life" },
  { title: 'Download', description: "Click 'Download' to instantly bring your clip to your device" },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Effortless video clipping made simple with just a few clicks
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
          <div className="space-y-10">
            {steps.map((step, index) => {
              const isRight = index % 2 === 0
              return (
                <div key={step.title} className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                  <div className={`${isRight ? 'md:order-2 text-left' : 'md:order-1 text-right'} px-2`}>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                  <div className={`${isRight ? 'md:order-1' : 'md:order-2'} hidden md:block`} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
