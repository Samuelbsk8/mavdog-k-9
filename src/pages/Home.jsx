import AboutSection from '../components/About';
import ServicesSection from '../components/Services';
import PortfolioPreview from '../components/PortfolioPreview';
import HomeHeroBanner from '../components/HomeHeroBanner';

const Home = () => {
  return (
    <>
      <HomeHeroBanner />
      <AboutSection />
      <ServicesSection />
      <PortfolioPreview />
    </>
  );
};

export default Home;