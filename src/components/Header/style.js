import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  z-index: 6;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(0, 23, 71, 0.8);
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
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;

    @media (max-width: 1280px) {
      display: none;
    }

    a {
      color: var(--text-menu);
    }

    li {
      display: flex;
      margin-right: 1rem;
      padding: 1rem 0;
      position: relative;

      

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
      margin-right: 0.5rem;
    }

    .up-down {
      display: flex;
      flex-direction: column;

      svg {
        width: 1.8rem;
        height: 1.8rem;
        color: var(--azul-light);
        margin: -0.6rem 0;
        margin-right: 1rem;
      }
    }

    .theme,
    .button-world,
    span,
    .up-down {
      @media (max-width: 1280px) {
        display: none;
      }
    }
  }
`;

export const HeaderBg = styled.div`
  position: relative;

  > img {
    object-fit: cover;
    min-height: 50rem;
  }

  .naruto-img {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 50rem;
    /* height: 100%; */

    @media (max-width: 1000px) {
      top: 70%;
    }
  }
`;

export const MenuMobile = styled.div`
  .hamburguer {
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
    width: 2.2rem;
    height: 2px;
    background: #fff;

    @media (max-width: 1280px) {
      opacity: 1;
      visibility: visible;
    }

    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      background-color: #fff;
      box-shadow: 0px 6px #fff, 0 -6px #fff;
      width: 2.2rem;
      height: 2px;
    }
  }

  .panel {
    position: fixed;
    z-index: 8;
    height: 100vh;
    max-width: 360px;

    @media (max-width: 500px) {
      max-width: 300px;
    }

    @media (max-width: 500px) {
      max-width: 80vw;
    }

    width: 100%;
    background: linear-gradient(
      180deg,
      var(--orange),
      var(--orange) 50%,
      #fc8834 75%,
      #fc8834 100%
    );
    left: 0;
    top: 0;
    transform: translateX(-100%);
    visibility: hidden;
    opacity: 0;
    border-right: 2px solid #f3a75a;
    overflow-y: scroll;
    -webkit-overflow-scrolling: scroll;

    transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &.active {
      transform: translateX(0);
      visibility: visible;
      opacity: 1;
    }

    svg {
      cursor: pointer;
    }

    .mobile-close {
      padding: 2rem 0 0 2rem;
    }

    .panelContent {
      display: flex;
      justify-content: center;
      gap: 2rem;
      flex-direction: column;
      color: var(--azul);

      .logo-img {
        padding: 2rem;
        width: 26rem;
        height: 12rem;
        margin-bottom: 2rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      form {
        display: flex;
        align-items: center;
        position: relative;

        svg {
          position: absolute;
          margin-left: 2rem;
        }

        input {
          color: #fff;
          width: 100%;
          border: 0;
          background: var(--azul);
          padding: 2rem 0rem 2rem 6rem;
          outline: none;

          &::placeholder {
            font-size: 1.2rem;
            font-style: italic;
            color: #fff;
            font-weight: bold;
          }
        }
      }

      .menuMobileNav {
        display: flex;
        flex-direction: column;

        li {
          text-transform: uppercase;
          font-weight: 600;
          padding: 12px 25px;
          line-height: 22px;
          font-size: 1.4rem;
        }
      }
    }
  }
`;

export const DropdownWrapper = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #fff;
  /* padding: 1.5rem 1rem; */
  width: 130%;
  color: #000;
  flex-direction: column;
  position: absolute;
  top: 3rem;
 
`;