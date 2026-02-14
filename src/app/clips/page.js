'use client'

import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ClipsPage() {
  const [clips, setClips] = useState([])

  useEffect(() => {
    // Load all clips from localStorage
    try {
      const allClips = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith('clips_')) {
          const videoClips = JSON.parse(localStorage.getItem(key))
          if (Array.isArray(videoClips)) {
            allClips.push(...videoClips)
          }
        }
      }
      // Sort by creation date, newest first
      allClips.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setClips(allClips)
    } catch (err) {
      console.error('Failed to load clips:', err)
    }
  }, [])

  const handleDownload = (downloadUrl) => {
    if (downloadUrl) {
      window.open(downloadUrl, '_blank')
    }
  }

  const handleDelete = (clipId, videoId) => {
    try {
      const stored = localStorage.getItem(`clips_${videoId}`)
      if (stored) {
        const videoClips = JSON.parse(stored)
        const updatedClips = videoClips.filter(clip => clip.id !== clipId)
        localStorage.setItem(`clips_${videoId}`, JSON.stringify(updatedClips))
        setClips(prev => prev.filter(clip => clip.id !== clipId))
      }
    } catch (err) {
      console.error('Failed to delete clip:', err)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">My Clips</h1>
          
          {clips.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-600 text-lg">No Clip Found</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {clips.map((clip) => (
                <div
                  key={clip.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:border-[#5271FF]/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-[#5271FF]/10 text-[#5271FF] text-xs font-medium rounded uppercase">
                          {clip.format}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                          {clip.quality}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(clip.createdAt).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-sm text-gray-700 space-y-1">
                        <div>
                          <span className="font-medium">Video ID:</span> {clip.videoId}
                        </div>
                        <div>
                          <span className="font-medium">Duration:</span> {clip.duration}
                        </div>
                        <div>
                          <span className="font-medium">Time Range:</span> {clip.startTime} - {clip.endTime}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {clip.downloadUrl && (
                        <button
                          type="button"
                          onClick={() => handleDownload(clip.downloadUrl)}
                          className="px-4 py-2 bg-[#5271FF] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Download
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => handleDelete(clip.id, clip.videoId)}
                        className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer showGetStarted={false} />
    </div>
  )
}
