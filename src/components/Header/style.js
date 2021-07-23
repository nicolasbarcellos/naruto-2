import styled from "styled-components";

export const Container = styled.header`
  background: var(--azul-medium);
  color: var(--text-menu);
  min-height: 67px;
  padding: 1rem 3rem;

  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    justify-content: space-between;
  }

  ul {
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8rem;

    a {
      color: var(--text-menu);
    }

    li {
      display: flex;
      margin-right: 1rem;

      span {
        color: var(--azul-light);
      }
    }
  }

  .left-nav {
    font-size: 1.8rem;
    display: flex;
    align-items: center;

    .theme {
      margin-right: 2rem;
      background: #000;
      border-radius: 999px;
      width: 6.7rem;
      height: 3.1rem;
      display: flex;
      align-items: center;

      svg {
        background: #fff;
        color: #000;
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
      }
    }

    svg {
      width: 3rem;
      height: 3rem;
      margin-right: .5rem;
    }

    .up-down {
      display: flex;
      flex-direction: column;

      svg {
        width: 1.8rem;
        height: 1.8rem;
        color: var(--azul-light);
        margin: -.6rem 0;
        margin-right: 1rem;
      }
    }
  }
`;

export const HeaderBg = styled.div`
  position: relative;

  .naruto-img {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50rem;
    width: 50rem;
  }

`
