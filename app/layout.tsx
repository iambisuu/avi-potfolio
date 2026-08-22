import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: {
    default: 'Avi Srivastava | Full-Stack Developer & Web Designer',
    template: '%s | Avi Srivastava'
  },
  description: 'Portfolio of Avi Srivastava, a full-stack developer specializing in scalable web applications, modern UIs, AI integrations, and exceptional digital experiences.',
  keywords: ['Avi Srivastava', 'Full-Stack Developer', 'Web Designer', 'UX Design', 'Next.js', 'React', 'TypeScript', 'GoLang', 'Portfolio', 'Software Engineer'],
  authors: [{ name: 'Avi Srivastava' }],
  creator: 'Avi Srivastava',
  publisher: 'Avi Srivastava',
  metadataBase: new URL('https://humble-calendar-990661.framer.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://humble-calendar-990661.framer.app',
    title: 'Avi Srivastava | Full-Stack Developer & Web Designer',
    description: 'Portfolio of Avi Srivastava, a full-stack developer specializing in scalable web applications and exceptional digital experiences.',
    siteName: 'Avi Srivastava Portfolio',
    images: [
      {
        url: '/avi.png',
        width: 800,
        height: 800,
        alt: 'Avi Srivastava',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avi Srivastava | Full-Stack Developer & Web Designer',
    description: 'Portfolio of Avi Srivastava, a full-stack developer specializing in scalable web applications and exceptional digital experiences.',
    images: ['/avi.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
