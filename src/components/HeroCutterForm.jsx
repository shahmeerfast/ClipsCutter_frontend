'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

function getYouTubeVideoId(input) {
  const trimmed = input.trim()
  try {
    const url = new URL(trimmed)
    if (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') {
      if (url.pathname === '/watch' && url.searchParams.get('v')) return url.searchParams.get('v')
      if (url.pathname.startsWith('/embed/')) return url.pathname.split('/')[2]
      if (url.pathname.startsWith('/v/')) return url.pathname.split('/')[2]
    }
    if (url.hostname === 'youtu.be') return url.pathname.slice(1).split('?')[0]
  } catch {
    return null
  }
  return null
}

const SHARE_URL = 'https://www.clipscutter.com'
const SHARE_TEXT = 'Cut your favorite video clip from youtube using clips cutter, an amazing online tool.'
const TWITTER_SHARE = `https://twitter.com/intent/tweet?url=${encodeURIComponent(SHARE_URL)}&text=${encodeURIComponent(SHARE_TEXT)}`
const FACEBOOK_SHARE = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}&t=${encodeURIComponent('Clips Cutter - Download Clips From Full Video')}`

export default function HeroCutterForm() {
  const router = useRouter()
  const [url, setUrl] = useState('')
  const [urlError, setUrlError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setUrlError('')
    if (!url.trim()) {
      setUrlError('Please enter a video URL')
      return
    }
    const videoId = getYouTubeVideoId(url)
    if (!videoId) {
      setUrlError('Please enter a valid YouTube URL')
      return
    }
    router.push(`/cutter/${videoId}`)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="w-full flex rounded-full border border-gray-200 bg-white shadow-md overflow-hidden">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Add link here"
            autoComplete="off"
            className={`flex-1 px-6 py-4 text-gray-800 placeholder-gray-400 focus:outline-none text-base border-0 ${urlError ? 'ring-2 ring-red-500' : ''}`}
          />
          <button type="submit" className="px-10 py-4 text-white font-bold hover:opacity-90 transition-opacity shrink-0 uppercase" style={{ backgroundColor: '#5271FF' }}>
            CLICK
          </button>
        </div>
        {urlError && <p className="text-red-500 text-sm mt-3">{urlError}</p>}
        <div className="flex justify-center items-center gap-4 mt-8">
          <a href={TWITTER_SHARE} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity" title="Share on Twitter">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <span className="w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center shrink-0" style={{ borderColor: '#5271FF' }}>
            <svg className="w-5 h-5" style={{ color: '#5271FF' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
              <line x1="6" y1="12" x2="18" y2="12"/>
            </svg>
          </span>
          <a href={FACEBOOK_SHARE} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity" style={{ backgroundColor: '#5271FF' }} title="Share on Facebook">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </form>
    </div>
  )
}
