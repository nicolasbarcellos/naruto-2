import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  z-index: 4;
  top: 50%;
  left: 0;

  div {
    cursor: pointer;
    background: #f32;
    padding: 1rem;
    border-radius: 4px;
    color: #fff;
    width: 40px;
    display: flex;
    align-items: center;
    /* position: relative; */

    header {
      font-size: 2rem;
      text-transform: uppercase;
    }
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  z-index: 7;
  top: 76px;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  opacity: 0;
  visibility: hidden;
  height: 100%;
  width: 30vw;

  @media(max-width: 860px) {
    width: 40vw;
  }
  @media(max-width: 600px) {
    width: 50vw;
  }
  @media(max-width: 600px) {
    width: 80vw;
  }

  background: red;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.active {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  svg {
    position: absolute;
    right: 1rem;
    top: 1rem;
  }

  ul {
    padding: 2rem;
    font-size: 2rem
  }
`;
