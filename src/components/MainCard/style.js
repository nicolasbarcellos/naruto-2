import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: auto;
  background: #0D316B;
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
  max-width: 100rem;
  margin: 0 auto;

  h3 {
    font-size: 3.5rem;
    font-weight: normal;
    letter-spacing: .2rem;
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

`;
