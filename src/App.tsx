import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Toaster from './components/ui/toaster'
import Contact from './pages/Contact'
import Home from './pages/Home'
import { ToastProviderContext } from './hooks/use-toast'

function App() {
  return (
    <ToastProviderContext>
      <div className="page-shell min-h-screen text-foreground">
        <div className="grid-overlay pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
        <ScrollToTop />
        <Navbar />
        <main className="relative z-10 pt-28 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </ToastProviderContext>
  )
}

export default App
