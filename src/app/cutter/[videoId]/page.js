'use client'

import { useParams } from 'next/navigation'
import { useState, useMemo, useEffect } from 'react'
import Navbar from '../../../components/Navbar'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

function pad(n) {
  return String(n).padStart(2, '0')
}

function secondsToHms(totalSeconds) {
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = Math.floor(totalSeconds % 60)
  return `${pad(h)}:${pad(m)}:${pad(s)}`
}

function hmsToSeconds(hms) {
  const parts = hms.trim().split(':').map(Number)
  if (parts.length === 2) return parts[0] * 60 + parts[1]
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2]
  return 0
}

const QUALITIES = ['360p', '480p', '720p', '1080p']

export default function CutterPage() {
  const params = useParams()
  const videoId = params?.videoId

  const [format, setFormat] = useState('mp4')
  const [quality, setQuality] = useState('360p')
  const [startTime, setStartTime] = useState('00:00:00')
  const [endTime, setEndTime] = useState('00:05:00')
  const [activeTab, setActiveTab] = useState('Controls')
  const [createStatus, setCreateStatus] = useState('idle')
  const [downloadUrl, setDownloadUrl] = useState(null)
  const [error, setError] = useState(null)
  const [clips, setClips] = useState([])

  useEffect(() => {
    if (videoId) {
      loadClips()
    }
  }, [videoId])

  const loadClips = () => {
    try {
      const stored = localStorage.getItem(`clips_${videoId}`)
      if (stored) {
        setClips(JSON.parse(stored))
      }
    } catch (err) {
      console.error('Failed to load clips:', err)
    }
  }

  const saveClip = (clipData) => {
    try {
      const newClip = {
        id: Date.now().toString(),
        videoId,
        startTime,
        endTime,
        format,
        quality,
        duration: durationHms,
        downloadUrl: clipData.file,
        createdAt: new Date().toISOString(),
      }
      const updatedClips = [newClip, ...clips]
      setClips(updatedClips)
      localStorage.setItem(`clips_${videoId}`, JSON.stringify(updatedClips))
    } catch (err) {
      console.error('Failed to save clip:', err)
    }
  }

  const embedUrl = useMemo(() => {
    if (!videoId) return ''
    return `https://www.youtube.com/embed/${videoId}`
  }, [videoId])
  const fullVideoUrl = useMemo(() => (videoId ? `https://www.youtube.com/watch?v=${videoId}` : ''), [videoId])

  const startSec = hmsToSeconds(startTime)
  const endSec = hmsToSeconds(endTime)
  const durationSec = Math.max(0, endSec - startSec)
  const durationHms = secondsToHms(durationSec)

  const sliderMax = 30 * 60
  const sliderStart = Math.min(startSec, sliderMax)
  const sliderEnd = Math.min(endSec, sliderMax)
  const sliderValue = [sliderStart, sliderEnd]

  const handleSliderChange = (e, index) => {
    const val = Number(e.target.value)
    if (index === 0) {
      const newStart = Math.min(val, sliderEnd - 1)
      setStartTime(secondsToHms(newStart))
    } else {
      const newEnd = Math.max(val, sliderStart + 1)
      setEndTime(secondsToHms(newEnd))
    }
  }

  const handleCreate = async () => {
    if (!fullVideoUrl) return
    setError(null)
    setCreateStatus('loading')
    try {
      const res = await fetch(`${API_BASE}/api/clip`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: fullVideoUrl,
          startTime,
          endTime,
          format,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to create clip')
      setDownloadUrl(data.file)
      setCreateStatus('success')
      saveClip(data)
    } catch (err) {
      setError(err.message)
      setCreateStatus('idle')
    }
  }

  const handlePreview = () => {
    if (!videoId) return
    const startSeconds = hmsToSeconds(startTime)
    const previewUrl = `https://www.youtube.com/embed/${videoId}?start=${startSeconds}&autoplay=1`
    const iframe = document.querySelector('iframe[title="YouTube player"]')
    if (iframe) {
      iframe.src = previewUrl
    }
  }

  const handleDownload = async () => {
    if (!downloadUrl) return
    try {
      const response = await fetch(downloadUrl)
      if (!response.ok) throw new Error('Failed to download file')
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = downloadUrl.split('/').pop() || `clip.${format}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      setError('Failed to download: ' + err.message)
    }
  }

  if (!videoId) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 flex items-center justify-center px-6">
          <p className="text-gray-600">Invalid video. <a href="/" className="text-[#5271FF] hover:underline">Go back</a></p>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 py-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 min-h-[70vh]">
            <div className="lg:col-span-3 bg-black flex items-center justify-center aspect-video lg:aspect-auto lg:min-h-[500px]">
              <iframe
                title="YouTube player"
                src={embedUrl}
                className="w-full h-full min-h-[280px] lg:min-h-[500px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="lg:col-span-2 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-200">
              <div className="flex border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setActiveTab('Controls')}
                  className={`flex-1 py-4 text-sm font-medium transition-colors ${activeTab === 'Controls' ? 'text-[#5271FF] border-b-2 border-[#5271FF]' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Controls
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('Clips')}
                  className={`flex-1 py-4 text-sm font-medium transition-colors ${activeTab === 'Clips' ? 'text-[#5271FF] border-b-2 border-[#5271FF]' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  Clips
                </button>
              </div>
              <div className="flex-1 p-6 space-y-5">
                {activeTab === 'Controls' && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
                        <select
                          value={format}
                          onChange={(e) => setFormat(e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5271FF] focus:border-[#5271FF] outline-none"
                        >
                          <option value="mp4">MP4</option>
                          <option value="mp3">MP3</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Quality</label>
                        <select
                          value={quality}
                          onChange={(e) => setQuality(e.target.value)}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5271FF] focus:border-[#5271FF] outline-none"
                        >
                          {QUALITIES.map((q) => (
                            <option key={q} value={q}>{q}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start time</label>
                      <input
                        type="text"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        placeholder="00:00:00"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5271FF] focus:border-[#5271FF] outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End time</label>
                      <input
                        type="text"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        placeholder="00:05:00"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5271FF] focus:border-[#5271FF] outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Time range</label>
                      <div className="flex gap-2 items-center">
                        <input
                          type="range"
                          min={0}
                          max={sliderMax}
                          value={sliderStart}
                          onChange={(e) => handleSliderChange(e, 0)}
                          className="flex-1 h-2 rounded-lg appearance-none bg-gray-200 accent-[#5271FF]"
                        />
                        <input
                          type="range"
                          min={0}
                          max={sliderMax}
                          value={sliderEnd}
                          onChange={(e) => handleSliderChange(e, 1)}
                          className="flex-1 h-2 rounded-lg appearance-none bg-gray-200 accent-[#5271FF]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={handlePreview}
                        className="px-5 py-2.5 border border-[#5271FF] rounded-lg text-[#5271FF] font-medium hover:bg-[#5271FF]/5 transition-colors"
                      >
                        Preview
                      </button>
                      <span className="px-4 py-2 bg-gray-100 rounded-lg font-mono text-sm text-gray-700">
                        {durationHms}
                      </span>
                      <button
                        type="button"
                        onClick={handleCreate}
                        disabled={createStatus === 'loading'}
                        className="px-6 py-2.5 rounded-lg text-white font-medium transition-colors disabled:opacity-60"
                        style={{ backgroundColor: '#5271FF' }}
                      >
                        {createStatus === 'loading' ? 'Creating…' : 'Create'}
                      </button>
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    {createStatus === 'success' && downloadUrl && (
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={handleDownload}
                          className="inline-flex items-center gap-2 text-[#5271FF] font-medium hover:underline"
                        >
                          Download your clip
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        </button>
                      </div>
                    )}
                  </>
                )}
                {activeTab === 'Clips' && (
                  <div className="space-y-3">
                    {clips.length === 0 ? (
                      <div className="text-gray-500 text-sm py-8 text-center">
                        Your created clips will appear here.
                      </div>
                    ) : (
                      clips.map((clip) => (
                        <div
                          key={clip.id}
                          className="border border-gray-200 rounded-lg p-4 hover:border-[#5271FF]/50 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="px-2 py-1 bg-[#5271FF]/10 text-[#5271FF] text-xs font-medium rounded uppercase">
                                  {clip.format}
                                </span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                                  {clip.quality}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {new Date(clip.createdAt).toLocaleString()}
                                </span>
                              </div>
                              <div className="text-sm text-gray-700 space-y-1">
                                <div>
                                  <span className="font-medium">Duration:</span> {clip.duration}
                                </div>
                                <div>
                                  <span className="font-medium">Time:</span> {clip.startTime} - {clip.endTime}
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={async () => {
                                try {
                                  const response = await fetch(clip.downloadUrl)
                                  if (!response.ok) throw new Error('Failed to download file')
                                  const blob = await response.blob()
                                  const url = window.URL.createObjectURL(blob)
                                  const a = document.createElement('a')
                                  a.href = url
                                  a.download = clip.downloadUrl.split('/').pop() || `clip.${clip.format}`
                                  document.body.appendChild(a)
                                  a.click()
                                  document.body.removeChild(a)
                                  window.URL.revokeObjectURL(url)
                                } catch (err) {
                                  setError('Failed to download: ' + err.message)
                                }
                              }}
                              className="px-4 py-2 bg-[#5271FF] text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 shrink-0"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Download
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
