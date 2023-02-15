import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { SubBanner } from "./components/sub-banner";

function App() {
  return (
    <>
      <Header />
      <Home>
        <Banner />
        <SubBanner />
      </Home>
      
    </>
  );
}

export default App;
