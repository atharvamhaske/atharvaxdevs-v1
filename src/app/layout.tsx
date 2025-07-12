import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/root/footer";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/root/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Atharva Mhaske - Full Stack Developer | AtharvaXDevs',
    template: '%s | Atharva Mhaske - AtharvaXDevs'
  },
  description: 'Atharva Mhaske (AtharvaXDevs) - Full Stack Developer from AISSMS. Explore my projects, GitHub repositories, and connect on LinkedIn. Visit atharvaxdevs.xyz for more.',
  keywords: [
    'atharva mhaske',
    'atharva mhaske aissms',
    'atharvaxdevs',
    'AtharvaXDevs',
    'Atharva Mhaske',
    'atharvaxcodes',
    'atharvaxdevs.xyz',
    'atharva mhaske github',
    'atharva mhaske linkedin',
    'full stack developer',
    'web developer',
    'software engineer',
    'react developer',
    'nextjs developer'
  ],
  authors: [{ name: 'Atharva Mhaske' }],
  creator: 'Atharva Mhaske',
  publisher: 'AtharvaXDevs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://atharvaxdevs.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atharvaxdevs.xyz',
    title: 'Atharva Mhaske - Full Stack Developer | AtharvaXDevs',
    description: 'Atharva Mhaske (AtharvaXDevs) - Full Stack Developer from AISSMS. Explore my projects and connect with me.',
    siteName: 'AtharvaXDevs',
    images: [
      {
        url: '/twtpfp.jpg',
        width: 1200,
        height: 630,
        alt: 'Atharva Mhaske - AtharvaXDevs Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atharva Mhaske - Full Stack Developer | AtharvaXDevs',
    description: 'Full Stack Developer from AISSMS. Follow @atharvaxdevs for tech updates.',
    creator: '@atharvaxdevs',
    images: ['/twtpfp.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Atharva Mhaske",
              "alternateName": ["AtharvaXDevs", "atharvaxcodes"],
              "url": "https://atharvaxdevs.xyz",
              "image": "https://atharvaxdevs.xyz/profile-image.jpg",
              "sameAs": [
                "https://github.com/atharvaxdevs",
                "https://linkedin.com/in/atharva-mhaske",
                "https://twitter.com/atharvaxdevs"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "AISSMS"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "AISSMS"
              },
              "knowsAbout": [
                "Web Development",
                "Full Stack Development",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
