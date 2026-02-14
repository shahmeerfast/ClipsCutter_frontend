'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AccountPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [activeTab, setActiveTab] = useState('Personal')

  useEffect(() => {
    const userData = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    
    if (!userData || !token) {
      router.push('/login')
      return
    }
    
    try {
      setUser(JSON.parse(userData))
    } catch (err) {
      router.push('/login')
    }
  }, [router])

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">My Account</h1>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setActiveTab('Personal')}
                  className={`px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'Personal'
                      ? 'text-[#5271FF] border-b-2 border-[#5271FF]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Personal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('Subscription')}
                  className={`px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'Subscription'
                      ? 'text-[#5271FF] border-b-2 border-[#5271FF]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Subscription
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('Payment Method')}
                  className={`px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'Payment Method'
                      ? 'text-[#5271FF] border-b-2 border-[#5271FF]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Payment Method
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('Payment History')}
                  className={`px-6 py-4 text-sm font-medium transition-colors ${
                    activeTab === 'Payment History'
                      ? 'text-[#5271FF] border-b-2 border-[#5271FF]'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Payment History
                </button>
              </div>
            </div>

            <div className="p-6">
              {activeTab === 'Personal' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={user.name || ''}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={user.email || ''}
                      readOnly
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-700"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'Subscription' && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No active subscription</p>
                </div>
              )}

              {activeTab === 'Payment Method' && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No payment method added</p>
                </div>
              )}

              {activeTab === 'Payment History' && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No payment history</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer showGetStarted={false} />
    </div>
  )
}
