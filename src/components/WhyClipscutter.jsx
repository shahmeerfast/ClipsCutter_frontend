'use client'

export default function WhyClipscutter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Why Clipscutter?</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Choose Clipscutter for fast, hassle-free video trimming that saves you time and enhances your editing experience. Simplify your workflow and enjoy creating with just a few clicks.
            </p>
            <div className="relative">
              <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100 w-64">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Clipscutter makes video editing a breeze quick, easy, and fun for everyone.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 w-72 mt-6 ml-24">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Join the Clipscutter community and unlock your creativity! Our platform empowers you to effortlessly cut and share your favorite video moments, making editing fun and accessible.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://www.clipscutter.com/images/why-us.jpg"
                alt="Why choose clipscutter"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
