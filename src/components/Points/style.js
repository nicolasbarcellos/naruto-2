import styled from "styled-components";

export const Container = styled.div`
  max-width: 140rem;
  margin: 6rem auto;
  padding: 0 6%;

  h2 {
    color: #2a477a;
    font-size: 3rem;
    letter-spacing: 0.2rem;
  }

  .specs {
    margin-top: 2rem;
    gap: 1rem;
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;

    > div {
      display: flex;
      text-align: center;
      flex-direction: column;
      border: 2px solid #c4c4c4;
      padding: 1rem;
      width: 10rem;
      margin-bottom: 1rem;

      label {
        font-size: 1.3rem;
        font-weight: bold;
        color: #d37d8d;
        margin-bottom: 0.5rem;
      }
    }
  }

  .points {
    font-size: 1.6rem;
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1rem 0;

    span {
      margin-bottom: 1rem;
      display: inline-block;
    }
  }

  button {
    border: 0;
    background: #626262;
    color: #fff;
    padding: 0 2rem;
    height: 4rem;
    border-radius: 6px;
    font-weight: bold;
    display: block;
    margin: 3rem auto;
  }

  .box-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .points-box {
    padding: 3rem 2rem;
    box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.3),
      inset 0px 0px 20px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    margin-bottom: 2rem;
    flex: 1 1 200px;
    margin-right: 1rem;

    p {
      font-size: 2rem;
      color: #fc984b;
      font-weight: 600;
      margin: 2rem 0;
    }

    div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      justify-items: center;

      span {
        display: inline-block;
        color: #89ab9e;
        font-size: 2rem;
        font-weight: bold;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
    .text-box {
      text-align: center;
      h3 {
        color: #89ab9e;
        line-height: 3rem;
        font-weight: 400;
        font-size: 2rem;
      }

      &::before {
        content: "";
        display: block;
        width: 90%;
        background: #626262;
        font-weight: bold;
        margin: 2rem auto;
        height: 0.1rem;
      }

      button {
        margin: 2rem auto 0 auto;
      }
    }
  }


  @media screen and (max-width: 640px) {
    .swiper-container {
      width: 640px;
    }
  }

  @media screen and (max-width: 768px) {
    .swiper-container {
      width: 768px;
    }
  }
`;
