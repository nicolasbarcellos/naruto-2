import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%
  height: auto;
  background: #0d316b;
  padding-top: 15rem;
  padding-bottom: 15rem;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  .b-top {
    top: calc(11rem - 8vw);
    width: 101%;
    left: 0;
    height: 50%;
    position: absolute;

    @media(max-width: 1320px) {
      top: calc(9rem - 8vw);
    }
    @media(max-width: 901px) {
      top: calc(6rem - 8vw);
    }
    @media(max-width: 576px) {
      top: calc(3rem - 8vw);
    }
  }

  .b-top img {
    transform: translate(-50%);
    top: -0.5rem;
    left: 50%;
    position: absolute;
    display: block;
    height: auto;
    width: 100%;
  }

  .b-bottom {
    width: 101%;
    left: 0;
    bottom: 0;
    height: 50%;
    position: absolute;
  }

  .b-bottom img {
    transform: translate(-50%);
    bottom: 0;
    left: 50%;
    position: absolute;
    /* z-index: 20000; */
  }

  .card-wrapper {
    width: 120rem;
    margin: 0 auto;
    padding: 0 6%;

    @media(max-width: 1056px) {
      width: 100%;
    }

    h3 {
      font-size: 3.5rem;
      font-weight: normal;
      letter-spacing: 0.2rem;
      font-style: italic;
    }

    p {
      margin-top: 1rem;
      font-size: 1.5rem;
      max-width: 80%;
      hyphens: auto;
    }

    .card {
      display: flex;

      img {
        object-fit: cover;
        margin-right: -3rem;
      }

      .card-active {
        backface-visibility: hidden;
      }
    }
  }
    .swiper-container {
    max-width: 120rem;
    margin: 0 auto;
    display: flex;
    padding: 0 6%;
  }

  .swiper-slide {
    /* display: flex; */
    /* margin-right: -0px; */

    @media(max-width: 1200px) {
      margin-right: -30px;
    }

    @media(max-width: 700px) {
      margin-right: -3%;
      /* width: 157.5px !important; */
    }
    
    img {
      width: 20rem;
      /* height: 25rem; */
    }
    
  }
  
`;
