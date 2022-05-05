import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import Intro from './pages/Intro';
import Map from './pages/Map';

function App() {
  return (
    <div className="App">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      <div className="w-100vh">
        <Home />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Intro />
          <Map />

          <section className="py-20">
            <h1 className="text-4xl text-left">Another paragraph</h1>
            <p className="indent-5 text-lg text-justify py-4">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.`}
            </p>
          </section>

          <div>
            <h2 className="text-4xl text-gray-900 text-left">Sources</h2>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
