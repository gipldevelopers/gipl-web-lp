import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gohil Infotech - Website Development Company in India",
  description: "Fast, Modern, High Converting Website Development That Brings Real Customers Not Just Visitors. Leading website development company in India building fast, modern, high-converting websites.",
  keywords: "website development, web development company, India, React, Next.js, frontend, backend, full-stack development, e-commerce website, business website, SEO, mobile responsive, web design",
  authors: [{ name: "Gohil Infotech" }],
  creator: "Gohil Infotech",
  publisher: "Gohil Infotech",
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
  openGraph: {
    title: "Gohil Infotech - Website Development Company in India",
    description: "Fast, Modern, High Converting Website Development That Brings Real Customers Not Just Visitors",
    url: "https://gohilinfotech.com",
    siteName: "Gohil Infotech",
    images: [
      {
        url: "/og-image.png", // You should create an OG image
        width: 1200,
        height: 630,
        alt: "Gohil Infotech - Website Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gohil Infotech - Website Development Company in India",
    description: "Fast, Modern, High Converting Website Development That Brings Real Customers Not Just Visitors",
    images: ["/twitter-image.png"], // You should create a Twitter image
    creator: "@gohilinfotech",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://gohilinfotech.com",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebDevelopmentCompany",
              "name": "Gohil Infotech",
              "description": "Leading website development company in India building fast, modern, high-converting websites",
              "url": "https://gohilinfotech.com",
              "logo": "https://gohilinfotech.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "India"
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "20.5937",
                  "longitude": "78.9629"
                },
                "geoRadius": "2000000"
              },
              "knowsAbout": [
                "Website Development",
                "Web Design",
                "React.js",
                "Next.js",
                "Node.js",
                "E-commerce Development",
                "SEO Optimization"
              ],
              "service": [
                {
                  "@type": "Service",
                  "name": "Website Development",
                  "description": "Custom website development services"
                },
                {
                  "@type": "Service",
                  "name": "E-commerce Development",
                  "description": "Online store development with secure payments"
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}