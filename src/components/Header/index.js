import "bootstrap/dist/css/bootstrap.min.css";

import { Container, HeaderBg, MenuMobile, DropdownWrapper } from "./style";

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
import Accordion from "react-bootstrap/Accordion";

function DropwDown() {
  return (
    <DropdownWrapper>
      <li>Menu 1</li>
      <li>Menu 2</li>
      <li>Menu 3</li>
    </DropdownWrapper>
  );
}

export function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDown1, setDropDown1] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [dropDown4, setDropDown4] = useState(false);
  const [dropDown5, setDropDown5] = useState(false);
  const [dropDown6, setDropDown6] = useState(false);
  const [dropDown7, setDropDown7] = useState(false);
  const [dropDown8, setDropDown8] = useState(false);
  const [dropDown9, setDropDown9] = useState(false);

  function onMouseEnter1() {
    setDropDown1(true);
  }

  function onMouseLeave1() {
    setDropDown1(false);
  }

  function onMouseEnter2() {
    setDropDown2(true);
  }

  function onMouseLeave2() {
    setDropDown2(false);
  }
  function onMouseEnter3() {
    setDropDown3(true);
  }

  function onMouseLeave3() {
    setDropDown3(false);
  }
  function onMouseEnter4() {
    setDropDown4(true);
  }

  function onMouseLeave4() {
    setDropDown4(false);
  }
  function onMouseEnter5() {
    setDropDown5(true);
  }

  function onMouseLeave5() {
    setDropDown5(false);
  }
  function onMouseEnter6() {
    setDropDown6(true);
  }

  function onMouseLeave6() {
    setDropDown6(false);
  }
  function onMouseEnter7() {
    setDropDown7(true);
  }

  function onMouseLeave7() {
    setDropDown7(false);
  }
  function onMouseEnter8() {
    setDropDown8(true);
  }

  function onMouseLeave8() {
    setDropDown8(false);
  }
  function onMouseEnter9() {
    setDropDown9(true);
  }

  function onMouseLeave9() {
    setDropDown9(false);
  }

  function mobileDropdown() {
    console.log("a");
  }

  props.onHandleOpen(isOpen);

  return (
    <>
      <Container>
        <nav>
          <MenuMobile>
            <div className="hamburguer" onClick={() => setIsOpen(true)}></div>
            <div className={`${isOpen ? "active" : ""} panel`}>
              <div className="mobile-close">
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
                  <input
                    type="search"
                    placeholder="Procure por usuários, personagens e mais..."
                  />
                </form>

                <ul className="menuMobileNav">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Usuário</Accordion.Header>
                      <Accordion.Body>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Personagem</Accordion.Header>
                      <Accordion.Body>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Academia</Accordion.Header>
                      <Accordion.Body>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Sensei</Accordion.Header>
                      <Accordion.Body>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Vila Atual</Accordion.Header>
                      <Accordion.Body>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                      <Accordion.Header>Combate</Accordion.Header>
                      <Accordion.Body>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                      <Accordion.Header>Equipe</Accordion.Header>
                      <Accordion.Body>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                      <Accordion.Header>Organização</Accordion.Header>
                      <Accordion.Body>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                      <Accordion.Header>Ranking</Accordion.Header>
                      <Accordion.Body>
                        <li>Menu 1</li>
                        <li>Menu 2</li>
                        <li>Menu 3</li>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </ul>
              </div>
            </div>
          </MenuMobile>

          <div className="logo">
            <img src={logoImg} alt="Naruto" />
          </div>
          <ul>
            <li onMouseEnter={onMouseEnter1} onMouseLeave={onMouseLeave1}>
              <a href="#">Usuário</a>
              <span>
                <MdArrowDropDown />
              </span>
              {dropDown1 && <DropwDown />}
            </li>
            <li onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
              <a href="#">Personagem</a>
              <span>
                <MdArrowDropDown />
              </span>
              {dropDown2 && <DropwDown />}
            </li>
            <li onMouseEnter={onMouseEnter3} onMouseLeave={onMouseLeave3}>
              <a href="#">Academia</a>
              <span>
                <MdArrowDropDown />
              </span>
              {dropDown3 && <DropwDown />}
            </li>
            <li onMouseEnter={onMouseEnter4} onMouseLeave={onMouseLeave4}>
              <a href="#">Sensei</a>
              <span>
                <MdArrowDropDown />
              </span>
              {dropDown4 && <DropwDown />}
            </li>
            <li onMouseEnter={onMouseEnter5} onMouseLeave={onMouseLeave5}>
              <a href="#">Vila Atual</a>
              <span>
                <MdArrowDropDown />
              </span>
              {dropDown5 && <DropwDown />}
            </li>
            <li onMouseEnter={onMouseEnter6} onMouseLeave={onMouseLeave6}>
              <a href="#">Combate</a>
              <span>
                <MdArrowDropDown />
              </span>
              {dropDown6 && <DropwDown />}
            </li>
            <li onMouseEnter={onMouseEnter7} onMouseLeave={onMouseLeave7}>
              <a href="#">Equipe</a>
              <span>
                <MdArrowDropDown />
              </span>
              {dropDown7 && <DropwDown />}
            </li>
            <li onMouseEnter={onMouseEnter8} onMouseLeave={onMouseLeave8}>
              <a href="#">Organização</a>
              <span>
                <MdArrowDropDown />
              </span>
              {dropDown8 && <DropwDown />}
            </li>
            <li onMouseEnter={onMouseEnter9} onMouseLeave={onMouseLeave9}>
              <a href="#">Ranking</a>
              <span>
                <MdArrowDropDown />
              </span>
              {dropDown9 && <DropwDown />}
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
