import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { EmotionalBanner } from "./components/EmotionalBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { InstagramCTA } from "./components/InstagramCTA";
import { Products } from "./components/Products";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Benefits />
        <Products />
        <HowItWorks />
        <EmotionalBanner />
        <InstagramCTA />
      </main>
      <Footer />
    </div>
  );
}
