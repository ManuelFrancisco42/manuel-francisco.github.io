/**********  Appjs *********/

import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import HeaderHome from './components/HeaderHome/HeaderHome';
import HeaderInner from './components/HeaderInner/HeaderInner';
import Home from './pages/Home';
import About from './pages/About/About';
import Work from './pages/Work/Work';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import './main.scss';
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname === '/') {
      return <HeaderHome />;
    } else {
      return <HeaderInner />;
    }
  };

  return (
    <div className='main-container'>
      {renderHeader()}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
