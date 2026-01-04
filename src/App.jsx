import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import AdminLayout from './pages/admin/AdminLayout.jsx';
// import AdminLogin from './pages/admin/Login.jsx';
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
            <Route path="/admin/*" element={<AdminLayout />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
