import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/common/Loader";
import BackToTop from "./components/common/BackToTop";
import ScrollProgress from "./components/common/ScrollProgress";
import CursorGlow from "./components/common/CursorGlow";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* Toast Notification */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: "#0f172a",
            color: "#fff",
            border: "1px solid #f97316",
            borderRadius: "12px",
          },
        }}
      />

      <CursorGlow />

      <ScrollProgress />

      <Navbar />

      <div className="overflow-x-hidden">
       <AnimatedRoutes />
      </div>

      <Footer />
      
      <BackToTop />
    </>
  );
}

export default App;