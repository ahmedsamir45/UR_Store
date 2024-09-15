import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import ProductDetails from './pages/ProductDetails';

import LandingPage from './pages/landing';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';  // For Font Awesome icons

function App() {
  return (

    <Router>
    <div className="App">
      <Navbar />
      <main className="content">
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
        <Route path="/products" element={<Home />} /> {/* Home Page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products/:id" element={<ProductDetails />} />
       
      </Routes>
      </main>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
