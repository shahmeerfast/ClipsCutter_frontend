import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Feedback - Clips Cutter',
  description: 'Share your feedback about Clipscutter.',
}

const options = [
  'Overall Service',
  'Time Selection',
  'Format Selection',
  'Clip Creation Process',
  'Video Player',
  'Preview',
]

export default function FeedbackPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Feedback</h1>
          <div className="h-px bg-gray-200 mb-6" />
          <div className="flex items-center justify-between mb-6 px-2">
            {['😠', '😞', '😐', '🙂', '😍'].map((face) => (
              <div key={face} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-xl">
                {face}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-700 mb-3">What can be improved?</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {options.map((label) => (
              <span
                key={label}
                className="px-3 py-1 rounded-md border border-gray-200 text-sm text-gray-700"
              >
                {label}
              </span>
            ))}
          </div>
          <textarea
            rows="5"
            placeholder="Other suggestions ..."
            className="w-full rounded-lg border border-gray-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#5271FF]/30 mb-6"
          />
          <button
            type="button"
            className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#5271FF' }}
          >
            Send
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
