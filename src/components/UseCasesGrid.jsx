'use client'

const useCases = [
  { label: 'Social Media Clips', icon: 'clapper' },
  { label: 'Memes Sharing', icon: 'chat' },
  { label: 'Sharing Highlights', icon: 'document' },
  { label: 'Archiving Moments', icon: 'archive' },
  { label: 'Content Creation', icon: 'pen' },
  { label: 'Educational Snippets', icon: 'book' },
  { label: 'Presentations & Pitches', icon: 'presentation' },
  { label: 'Research & Analysis', icon: 'search' },
  { label: 'Event Highlights', icon: 'star' },
  { label: 'Tutorial Creation', icon: 'tutorial' },
  { label: 'Product Reviews', icon: 'review' },
  { label: 'Advertisements', icon: 'chart' },
]

const icons = {
  clapper: (
    <path d="M7 3h10a2 2 0 0 1 2 2v3H5V5a2 2 0 0 1 2-2zm12 7v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7h14zM5 8l4-4m2 4l4-4m2 4l2-2" />
  ),
  chat: (
    <path d="M4 5h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
  ),
  document: (
    <path d="M6 3h8l4 4v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm8 0v4h4M8 12h8M8 16h6" />
  ),
  archive: (
    <path d="M4 7h16v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7zm1-4h14a1 1 0 0 1 1 1v2H4V4a1 1 0 0 1 1-1zm5 7h4" />
  ),
  pen: (
    <path d="M4 20l4-1 9-9a2 2 0 0 0-3-3l-9 9-1 4zM13 7l4 4" />
  ),
  book: (
    <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2V5zm12 14V3M6 5h8" />
  ),
  presentation: (
    <path d="M4 4h16v10H4V4zm8 10v6m-4 0h8m-10-4h12" />
  ),
  search: (
    <path d="M11 19a8 8 0 1 1 6.32-3.1L21 19l-2 2-3.68-3.1A7.96 7.96 0 0 1 11 19z" />
  ),
  star: (
    <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.6L12 16l-4.9 2.6.9-5.6-4-3.9 5.5-.8L12 3z" />
  ),
  tutorial: (
    <path d="M8 7a3 3 0 1 1 6 0v3H8V7zm-4 9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v4H4v-4zm12-7l4 2-4 2V9z" />
  ),
  review: (
    <path d="M4 4h12a2 2 0 0 1 2 2v12H6l-4 4V6a2 2 0 0 1 2-2zm5 5h6M9 13h4m5-5l4 2-4 2" />
  ),
  chart: (
    <path d="M4 19h16M6 16v-4m4 4v-7m4 7v-10m4 10v-13" />
  ),
}

export default function UseCasesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Use Cases</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore endless purposes for cutting and sharing your videos
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {useCases.map((item) => (
            <div key={item.label} className="flex flex-col items-center text-center">
              <div className="w-10 h-10 mb-3 text-gray-800">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                  {icons[item.icon]}
                </svg>
              </div>
              <span className="text-sm text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
