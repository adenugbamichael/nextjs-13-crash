import Header from "./components/Header"
import "./globals.css"
import { Open_Sans } from "next/font/google"

const openSans = Open_Sans({
  subsets: ["latin"],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  keywords:
    "web development, web design, javascript, react, node, angular, vue, html, css",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  )
}
