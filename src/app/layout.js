import '../styles/globals.css'

export const metadata = {
  title: 'Clips Cutter - Download Clips From Full Video',
  description: 'Cut your favorite video clip from youtube using clips cutter, an amazing online tool.',
  openGraph: {
    title: 'Clips Cutter - Download Clips From Full Video',
    description: 'Cut your favorite video clip from youtube using clips cutter, an amazing online tool.',
    url: 'https://www.clipscutter.com',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Clips Cutter - Download Clips From Full Video',
    description: 'Cut your favorite video clip from youtube using clips cutter, an amazing online tool.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5271FF',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 flex flex-col antialiased">
        {children}
      </body>
    </html>
  )
}
