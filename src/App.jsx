import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Hero from './components/sections/Hero';
import MarqueeBar from './components/sections/MarqueeBar';
import RankingSection from './components/sections/RankingSection';
import InvestorsSection from './components/sections/InvestorsSection';
import FeaturesSection from './components/sections/FeaturesSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';
import Footer from './components/Footer';
import EmailModal from './components/EmailModal';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetAccess = () => {
    setIsModalOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen smooth-scroll">
        <Hero onGetAccess={handleGetAccess} />
        <MarqueeBar />
        <RankingSection onGetAccess={handleGetAccess} />
        <InvestorsSection onGetAccess={handleGetAccess} />
        <FeaturesSection onGetAccess={handleGetAccess} />
        <FAQSection />
        <CTASection onGetAccess={handleGetAccess} />
        <Footer />
        <EmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
