import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geist = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0B0C',
}

export const metadata: Metadata = {
  title: 'TradeFlow AI - Automated Trading Infrastructure',
  description: 'Launch, manage and scale trading bots effortlessly. No code required. Support for 15+ exchanges.',
  keywords: ['trading bots', 'automated trading', 'crypto trading', 'copy trading', 'trading infrastructure'],
  openGraph: {
    title: 'TradeFlow AI - Automated Trading Infrastructure',
    description: 'Launch, manage and scale trading bots effortlessly. No code required.',
    type: 'website',
    siteName: 'TradeFlow AI',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className={geist.className}>{children}</body>
    </html>
  )
}
