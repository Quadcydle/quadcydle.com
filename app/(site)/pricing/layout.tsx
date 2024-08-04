import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../../../styles/globals.css"
import { ThemeProvider } from "../../../components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Pricing page for a SaaS product using Shadcn UI",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <nav className="pt-2 px-4 flex justify-end">
            
          </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
