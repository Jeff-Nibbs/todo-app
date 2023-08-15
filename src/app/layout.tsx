import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'Todo App',
}
const druk = localFont({
  src: '../../public/fonts/DrukCyr-Super.woff2',
  variable: '--font-druk',
})

const ntxPro = localFont({
  src: '../../public/fonts/NHaasGroteskTXPro-55Rg.ttf',
  variable: '--font-ntxpro',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${druk.variable} ${ntxPro.variable} font-sans`}>
      <body className={`bg-slate-800 text-slate-100 container mx-auto p-4`}>{children}</body>
    </html>
  )
}
