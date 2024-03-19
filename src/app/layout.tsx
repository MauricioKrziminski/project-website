import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LAEC',
  description: 'LAEC - LIGA ACADEMICA DE ENFERMAGEM EM CARDIOLOGIA',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <link rel="icon" href="https://i.imgur.com/vkALo3F.png" sizes="any" />
        <div className="min-h-screen">
          <main className="pt-11">{children}</main>
        </div>
      </body>
    </html>
  )
}
