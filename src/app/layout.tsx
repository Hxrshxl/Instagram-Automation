import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import {
  ClerkProvider
} from '@clerk/nextjs'
import { dark } from '@clerk/themes'


const dmSans = DM_Sans({
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: "SlideIn - Instagram Automation Platform",
  description:
    "Automate your Instagram growth with our powerful platform. Schedule posts, engage with your audience, and grow your following.",
  keywords: "instagram automation, instagram growth, social media management, instagram scheduler",
  authors: [{ name: "SlideIn Team" }],
  openGraph: {
    title: "InstaGrow - Instagram Automation Platform",
    description: "Automate your Instagram growth with our powerful platform.",
    url: "https://instagrow.com",
    siteName: "SlideIn",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SlideIn - Instagram Automation Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: dark,
    }}
    >
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${jakarta.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  )
}
