import Accounts from "./components/Accounts";
import AgencyBanking from "./components/AgencyBanking";
import FinancialSoln from "./components/FinancialSoln";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PremierCards from "./components/PremierCards";
import PremierWalletAbout from "./components/PremierWalletAbout";
import Services from "./components/Services";
import Navbar from "./header/Navbar";
import Topheader from "./header/Topheader";

function App() {
  return (
    <div className="App">
      <Topheader />
      <Navbar />
      <Hero />
      <PremierCards />
      <Accounts />
      <PremierWalletAbout />
      <FinancialSoln />
      <AgencyBanking />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
