import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mandeep Choudhary | Graduate Network Engineer',
  description: 'Graduate Network Engineer at HCL Technologies | NOC / Enterprise Networking | Network L1 Engineer with expertise in PRTG, ServiceNow, Cisco DNA Center, and network monitoring.',
  keywords: ['Mandeep Choudhary', 'Network Engineer', 'NOC', 'Enterprise Networking', 'HCL Technologies', 'PRTG', 'ServiceNow', 'Cisco DNA Center'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

