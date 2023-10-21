import './globals.css'
import type { Metadata } from 'next'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import CustomFilter from "../components/CustomFilter"
import SearchBar from "../components/SearchBar"

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
	  <Navbar/>
		{children}
	  <Footer/>
	  </body>
    </html>
  )
}
