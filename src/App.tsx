import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { BookNow } from './components/BookNow';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        
        <Gallery />
        <BookNow />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
