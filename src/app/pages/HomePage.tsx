import { Hero } from '../components/Hero';
import { Categories } from '../components/Categories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { TrustBadges } from '../components/TrustBadges';
import { CTABanner } from '../components/CTABanner';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { MapSection } from '../components/MapSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
      <About />
      <FAQ />
      <CTABanner />
      <MapSection />
      <Contact />
    </>
  );
}
