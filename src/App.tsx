import { Banner } from "./components/banner";
import { Header } from "./components/header";
import { Home } from "./components/home";

function App() {
  return (
    <>
      <Header />
      <Home>
        <Banner />
      </Home>
    </>
  );
}

export default App;
