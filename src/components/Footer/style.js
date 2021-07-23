import styled from "styled-components";

export const Container = styled.footer`
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 6rem;
  font-family: "Lexend", sans-serif;
  color: #fff;
  text-transform: uppercase;

  a {
    color: #fff;
    font-weight: bold;
    padding: 1rem;
  }

.footerFlags {
  display: flex;
}

.footerFlags img {
  margin-left: 1rem;
}

.topFooter {
  padding: 1.5rem 0;
  width: 100%;
  background-color: #0d0f1d;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.socialFooter {
  display: flex;
  margin-top: 1rem;
}

.topFooter p {
  margin-top: 1rem;
  font-style: italic;
  /* font-weight: 300; */
}

.topFooter p {
  font-weight: 300;
}

.topFooter img {
  width: 3rem;
  height: auto;
  margin: 1rem 1rem;
}

.subFooter {
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
}

.footerMenu {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.footerMenu li {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.footerMenu li:not(:last-child):after {
  content: "";
  display: inline-block;
  width: 2px;
  margin-left: 1rem;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.3);
}

.subFooter .footerFlags img {
  width: 4rem;
  height: auto;
}

.footerPrivacy {
  display: flex;
}

.footerPrivacy li {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}

.subFooter p {
  margin: 1rem 0;
}

.footerPrivacy li:not(:last-child):after {
  content: "";
  display: inline-block;
  width: 2px;
  margin-left: 1rem;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.3);
}

.footerPrivacy a {
  font-size: 1.2rem;
}
`
