import { Container } from "./style";

import facebookImg from '../../assets/facebook.png';
import twitterImg from '../../assets/twitter.png';
import youtubeImg from '../../assets/youtube.png';
import usaImg from '../../assets/usa.svg';
import brazilImg from '../../assets/brazil.svg';


export function Footer() {
  return (
    <Container>
      <div className="topFooter">
        <p>Fique conectado</p>
        <div className="socialFooter">
          <img src={twitterImg} alt="twitter" />
          <img src={facebookImg} alt="facebook" />
          <img src={youtubeImg} alt="youtube" />
        </div>
      </div>
      <div className="subFooter">
        <ul className="footerMenu">
          <li>
            <a className="hvr-underline-from-left" href="#">
              Manual
            </a>
          </li>
          <li>
            <a className="hvr-underline-from-left" href="#">
              Notícias
            </a>
          </li>
          <li>
            <a className="hvr-underline-from-left" href="#">
              Ranking
            </a>
          </li>
          <li>
            <a className="hvr-underline-from-left" href="#">
              Hall da fama
            </a>
          </li>
          <li>
            <a className="hvr-underline-from-left" href="#">
              contato
            </a>
          </li>
        </ul>
        <p>NOSSOS JOGOS: ANIME ALL STARS GAME - CDZ GAME - DRAGON BALL </p>
        <div className="footerFlags">
          <a href="#">
            <img src={brazilImg} alt="brazil" />
          </a>
          <a href="#">
            <img src={usaImg} alt="usa" />
          </a>
        </div>
        <p>©2021 NARUTO GAME - TODOS OS DIREITOS RESERVADOS</p>
        <p>
          Personagens e ilustrações originais © Copyright 2002 por Masashi
          Kishimoto.
        </p>
        <ul className="footerPrivacy">
          <li>
            <a className="hvr-underline-from-left" href="#">
              Termos de uso
            </a>
          </li>
          <li>
            <a className="hvr-underline-from-left" href="#">
              Privacidade
            </a>
          </li>
          <li>
            <a className="hvr-underline-from-left" href="#">
              Regras e punições
            </a>
          </li>
          <li>
            <a className="hvr-underline-from-left" href="#">
              Cookie Policy
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
}
