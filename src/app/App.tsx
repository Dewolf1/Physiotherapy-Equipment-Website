import { BrowserRouter, Routes, Route, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StickyButtons } from './components/StickyButtons';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CataloguePrintPage from './pages/CataloguePrintPage';
import { ScrollProgress } from './components/ScrollProgress';
import { Toaster } from 'sonner';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function InitialLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-navy-950 flex items-center justify-center"
    >
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }} 
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-16 h-16 border-4 border-royal-600 border-t-transparent rounded-full animate-spin" />
        <div className="text-white font-black tracking-[0.2em] uppercase text-sm">Hospimedico</div>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence>
        {isLoading && <InitialLoader key="loader" />}
      </AnimatePresence>
      <ScrollProgress />
      <div className="min-h-screen bg-white flex flex-col">
        <Toaster position="top-right" expand={true} richColors />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/catalogue/print" element={<CataloguePrintPage />} />
          </Routes>
        </main>

        <Footer />
        <StickyButtons />
      </div>
    </BrowserRouter>
  );
}