import "./App.css";
import "./index.css";

import { AboutUs, HIW, Navbar, Pricing, FAQs } from "./components";
import { Header, Footer } from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="wrap_main-content">
        <Navbar />
        <Header />
        <AboutUs />
        <HIW />
        <Pricing />
        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
