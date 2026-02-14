'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const navLinks = [
  { href: '/clips', label: 'Clips' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/privacy-policy', label: 'Privacy' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      try {
        setUser(JSON.parse(userData))
      } catch (err) {
        // Invalid user data
      }
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileOpen && !event.target.closest('.profile-dropdown')) {
        setProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [profileOpen])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
    setProfileOpen(false)
    router.push('/')
  }

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center gap-3">
            <svg className="w-7 h-7 shrink-0" viewBox="0 0 75 75" fill="#5271FF">
              <path d="M43.18 17.27L22.45 38.04c-4.11 4.12-4.11 10.82 0 14.94 4.11 4.12 10.8 4.12 14.91 0L55 35.29c1.33-1.33 1.33-3.48 0-4.81-1.32-1.33-3.47-1.33-4.8 0L32.56 48.16c-1.46 1.47-3.84 1.47-5.31 0-1.46-1.46-1.46-3.85 0-5.32L47.97 22.07c4.25-4.26 11.17-4.26 15.42 0 2.06 2.07 3.19 4.81 3.19 7.73s-1.13 5.66-3.19 7.73L40.14 60.83c-3.41 3.42-7.95 5.3-12.77 5.3s-9.36-1.88-12.77-5.3c-7.04-7.05-7.04-18.53 0-25.58L41.33 8.47c1.32-1.33 1.32-3.48 0-4.81-1.32-1.33-3.47-1.33-4.79 0L9.81 30.44C.13 40.14.13 55.93 9.81 65.64c4.69 4.7 10.93 7.29 17.56 7.29s12.87-2.59 17.56-7.29L68.19 42.34c6.9-6.91 6.9-18.16 0-25.07-6.89-6.9-18.12-6.89-25.01.04z"/>
            </svg>
            <span className="text-xl font-semibold" style={{ color: '#5271FF' }}>Clips Cutter</span>
          </a>
          <div className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-gray-800 hover:text-[#5271FF] font-medium transition-colors">
                {link.label}
              </a>
            ))}
            <div className="relative profile-dropdown">
              <button
                type="button"
                onClick={() => setProfileOpen((open) => !open)}
                className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-[#5271FF] transition-colors"
                aria-label="Account"
                aria-expanded={profileOpen}
              >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/>
              </svg>
            </button>
              {profileOpen && (
                <div className="absolute right-0 mt-3 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2 text-sm z-50">
                  {user ? (
                    <>
                      <a href="/account" onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Account</a>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <a href="/login" onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Login</a>
                      <a href="/signup" onClick={() => setProfileOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Signup</a>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-gray-500 hover:bg-gray-100"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-gray-800 hover:text-[#5271FF] font-medium">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
