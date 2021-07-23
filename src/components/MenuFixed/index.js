import { Container } from "./style";
import { useState } from "react";

export default function MenuFixed() {
  const [active, setActive] = useState(false); 

  return (
    <Container>
      <div onClick={() => setActive(!active)}>
        <header>Menu</header>
      </div>
      <ul className={active ? 'active': null}>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
      </ul>
    </Container>
  );
}
