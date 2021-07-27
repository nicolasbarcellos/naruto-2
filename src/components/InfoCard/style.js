import styled from "styled-components";

export const Container = styled.div`
  max-width: 96rem;
  padding: 0 6%;
  margin: 0 auto;
  margin-bottom: 8rem;

  .card {
    position: relative;
    background: var(--azul);
    border-radius: 0.4rem;
    z-index: 2;
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 860px;
    

    .card-top {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      justify-items: center;
      text-align: center;
      padding: 1rem 0;


      @media(max-width: 720px) {
        grid-template-columns: 1fr;
        row-gap: 2rem;
      }

      .level {
        color: var(--background);
        font-family: "GT America";

        span {
          font-size: 2.7rem;
        }

        h1 {
          line-height: 6rem;
          font-size: 7.6rem;
        }
      }

      .next-level {
        color: #082655;
      }

      .heart {
        /* img {
          width: 47px;
          height: 49px;
        } */
      }

      .specs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 1rem;

        @media(max-width: 720px) {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        > div {
          display: flex;
          gap: 0.5rem;

          div {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        }

        span {
          font-size: 1.9rem;
          color: var(--background);
        }

        .bar {
          width: 100%;
          height: 1rem;

          &.red {
            background: #ff0600;
          }

          &.blue {
            background: #4395ff;
          }

          &.yellow {
            background: #ff9c00;
          }
        }
      }
    }

    .progress {
      width: 49.8rem;
      height: 2rem;
      background: #1f1f1f;
      color: #fff;
      font-size: 1.9rem;
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 2;

      @media(max-width: 524px) {
        width: 80vw;
      }

      &::after {
        content: "";
        position: absolute;
        width: 35%;
        background: #f8b764;
        height: 2rem;
        z-index: -1;
        left: 0;
      }
    }
  }

  .card-bottom {
    border-top: 1px solid #fff;
    background: #07152c;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-evenly;
    color: #fff;
    padding: 1rem 0;

    @media(max-width: 510px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;

      span {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 2rem;
        gap: .5rem;
      }

      svg {
        font-size: 5rem;
      }
    }
  }
`;
