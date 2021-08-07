import { Container, Wrapper } from "./style";
import { useState } from "react";

import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5";

export default function MenuFixed(props) {
  const [active, setActive] = useState(false);

  console.log(props.close);

  return (
    <>
      <Container>
        <div onClick={() => setActive(true)}>
          <IoArrowForwardOutline size={24} />
        </div>
      </Container>
      
      {!props.close &&  <Wrapper
        className={`${active ? "active" : null}`}
      >
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
        </ul>
        <IoArrowBackOutline
          onClick={() => setActive(false)}
          size={24}
          color="#000"
        />
      </Wrapper> }
     
    </>
  );
}
