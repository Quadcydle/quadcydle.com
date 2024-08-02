import { AnalyticsWrapper } from "../components/Homepage/analytics";
import { Container } from "../components/Homepage/container";
import { CopyrightLinearBanner } from "../components/Homepage/copyright-linear-banner";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../styles/globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="Quadcydle"
          content="Last stop for all your Business needs"
        />
      </head>
      <body>
        <div>
          <Header />
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <Footer />
          <CopyrightLinearBanner />
        </div>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
