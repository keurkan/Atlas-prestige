import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import AtlasFly from '@/pages/AtlasFly';
import AtlasDrive from '@/pages/AtlasDrive';
import AtlasStay from '@/pages/AtlasStay';
import AtlasDine from '@/pages/AtlasDine';
import AtlasAccess from '@/pages/AtlasAccess';
import AtlasConcierge from '@/pages/AtlasConcierge';
import AtlasSecurity from '@/pages/AtlasSecurity';
import AtlasActivities from '@/pages/AtlasActivities';
import AtlasTransport from '@/pages/AtlasTransport';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/atlas-fly" element={<AtlasFly />} />
                <Route path="/services/atlas-drive" element={<AtlasDrive />} />
                <Route path="/services/atlas-stay" element={<AtlasStay />} />
                <Route path="/services/atlas-dine" element={<AtlasDine />} />
                <Route path="/services/atlas-access" element={<AtlasAccess />} />
                <Route path="/services/atlas-concierge" element={<AtlasConcierge />} />
                <Route path="/services/atlas-security" element={<AtlasSecurity />} />
                <Route path="/services/atlas-activities" element={<AtlasActivities />} />
                <Route path="/services/atlas-transport" element={<AtlasTransport />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
