import React, { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import Header from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import Discover from './components/discover/Discover';
import Second from './components/places/Places';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the duration of the preloader as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <BeatLoader color={'#B60505'} loading={loading} size={30} />
        </div>
      ) : (
        <div>
          <Header />
          <Hero />
          <Second />
          <Discover />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
