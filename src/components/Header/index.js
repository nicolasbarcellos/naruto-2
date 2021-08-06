import { Container, HeaderBg, MenuMobile } from "./style";

import logoImg from "../../assets/logo.png";
import logoImgMobile from "../../assets/logo-mobile.png";
import bgImg from "../../assets/bg.png";
import narutoImg from "../../assets/naruto.png";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { IoMoon, IoClose, IoSearchSharp } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Container>
        <nav>
          <MenuMobile>
            <div className="hamburguer" onClick={() => setIsOpen(true)}></div>
            <div className={`${isOpen ? "active" : ""} panel`}>
              <div className='mobile-close'>
                <IoClose
                  size={24}
                  color="#0d316b"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <div className="panelContent">
                <div className="logo-img">
                  <img src={logoImgMobile} alt="Naruto" />
                </div>

                <form>
                  <IoSearchSharp size={24} color="#fff" />
                  <input type="search" placeholder="Procure por usuários, personagens e mais..." />
                </form>

                <ul className="menuMobileNav">
                  <li>Usuário</li>
                  <li>Personagem</li>
                  <li>Academia</li>
                  <li>Sensei</li>
                  <li>Vila Atual</li>
                  <li>Combate</li>
                  <li>Equipe</li>
                  <li>Organização</li>
                  <li>Ranking</li>
                </ul>
              </div>
            </div>
          </MenuMobile>

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
            <BiWorld className="button-world" />
            <span>Português</span>
            <div className="up-down">
              <MdArrowDropUp />
              <MdArrowDropDown />
            </div>
            <AiOutlinePoweroff className="button-login" />
          </div>
        </nav>
      </Container>
      <HeaderBg>
        <img src={bgImg} alt="Naruto" />
        <img className="naruto-img" src={narutoImg} alt="Naruto" />
      </HeaderBg>
    </>
  );
}
