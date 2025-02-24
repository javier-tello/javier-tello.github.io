import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col mx-auto">
        <div className="container mx-auto px-12 py-4">
          <HeroSection />
        </div>
      </main>

  );
}
