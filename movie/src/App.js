import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/About" element={<AboutUs />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
