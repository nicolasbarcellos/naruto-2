import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { InfoCard } from "./components/InfoCard";
import { Points } from "./components/Points";
import { Footer } from "./components/Footer";
import MenuFixed from "./components/MenuFixed";
import MainCard from "./components/MainCard";
import { useState } from "react";



export function App() {
  const [active, setActive] = useState(false);

  function handleOpen(isOpen) {
    setActive(isOpen)
  }


  return (
    <>
      <MenuFixed close={active} />
      <Header onHandleOpen={handleOpen} />
      <InfoCard />
      <MainCard />
      <Points />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
