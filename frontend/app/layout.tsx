import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TradeFlow AI - Automated Trading Infrastructure',
  description: 'Launch, manage and scale trading bots effortlessly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
