import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Contact Us - Clips Cutter',
  description: 'Contact Clipscutter using the form.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Contact Form</h1>
          <div className="h-px bg-gray-200 mb-6" />
          <form className="space-y-5">
            <div>
              <label className="block text-sm text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5271FF]/30"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Email (Optional)</label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#5271FF]/30"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-2">Message</label>
              <textarea
                rows="5"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#5271FF]/30"
              />
            </div>
            <button
              type="button"
              className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#5271FF' }}
            >
              Send
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
