import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { InfoCard } from "./components/InfoCard";
import { Points } from "./components/Points";
import { Footer } from "./components/Footer";
import MenuFixed from "./components/MenuFixed";
import MainCard from "./components/MainCard";

export function App() {
  return (
    <>
      <Header />
      <InfoCard />
      <MainCard />
      <Points />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
