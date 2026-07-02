import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import WhatsAppButton from "./components/common/WhatsAppButton";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;