import { Container, HeaderBg } from "./style";

import logoImg from "../../assets/logo.png";
import bgImg from "../../assets/bg.png";
import narutoImg from "../../assets/naruto.png";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { AiOutlinePoweroff } from "react-icons/ai";

export function Header() {
  return (
    <>
      <Container>
        <nav>
          <div className="logo">
            <img src={logoImg} alt="Naruto" />
          </div>
          <ul>
            <li>
              <a href="#">Usuário</a>
              <span>
                <MdArrowDropDown />
              </span>
            </li>
            <li>
              <a href="#">Personagem</a>
              <span>
                <MdArrowDropDown />
              </span>
            </li>
            <li>
              <a href="#">Academia</a>
              <span>
                <MdArrowDropDown />
              </span>
            </li>
            <li>
              <a href="#">Sensei</a>
              <span>
                <MdArrowDropDown />
              </span>
            </li>
            <li>
              <a href="#">Vila Atual</a>
              <span>
                <MdArrowDropDown />
              </span>
            </li>
            <li>
              <a href="#">Combate</a>
              <span>
                <MdArrowDropDown />
              </span>
            </li>
            <li>
              <a href="#">Equipe</a>
              <span>
                <MdArrowDropDown />
              </span>
            </li>
            <li>
              <a href="#">Organização</a>
              <span>
                <MdArrowDropDown />
              </span>
            </li>
            <li>
              <a href="#">Ranking</a>
              <span>
                <MdArrowDropDown />
              </span>
            </li>
          </ul>
          <div className="left-nav">
            <div className="theme">
              <IoMoon />
            </div>
            <BiWorld />
            <span>Português</span>
            <div className="up-down">
              <MdArrowDropUp />
              <MdArrowDropDown />
            </div>
            <AiOutlinePoweroff />
          </div>
        </nav>
      </Container>
      <HeaderBg>
        <img src={bgImg} alt="Naruto" />
        <img className='naruto-img' src={narutoImg} alt="Naruto" />
      </HeaderBg>
    </>
  );
}
