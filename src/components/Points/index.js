import { Container } from "./style";

import shariganImg from "../../assets/sharigan.png";
import genImg from "../../assets/gen.png";
import conheImg from "../../assets/conhe.png";
import inteImg from "../../assets/inte.png";
import convImg from "../../assets/conv.png";
import targetImg from "../../assets/target2.png";
import agiImg from "../../assets/agi.png";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import { useEffect, useState } from "react";

export function Points() {
  const [windowWidth, setWindowWidth] = useState(1900);

  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return width;
  }



  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <Container>
      <h2>Personalize os atributos do seu Clã</h2>

      <div className="specs">
        <div>
          <label htmlFor="Genjutsu">Genjutsu</label>
          <select name="Genjutsu" id="Genjutsu">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label htmlFor="Ninjutsu">Ninjutsu</label>
          <select name="Ninjutsu" id="Ninjutsu">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label htmlFor="Agilidade">Agilidade</label>
          <select name="Agilidade" id="Agilidade">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label htmlFor="Selo">Selo</label>
          <select name="Selo" id="Selo">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label htmlFor="Resistência">Resistência</label>
          <select name="Resistência" id="Resistência">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label htmlFor="Inteligência" style={{ color: "#ffb083" }}>
            Inteligência
          </label>
          <select name="Inteligência" id="Inteligência">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label htmlFor="Percepção" style={{ color: "#ffb083" }}>
            Percepção
          </label>
          <select name="Percepção" id="Percepção">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label htmlFor="Concentração" style={{ color: "#ffb083" }}>
            Concentração
          </label>
          <select name="Concentração" id="Concentração">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label htmlFor="Convicção" style={{ color: "#ffb083" }}>
            Convicção
          </label>
          <select name="Convicção" id="Convicção">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label htmlFor="Determinação" style={{ color: "#ffb083" }}>
            Determinação
          </label>
          <select name="Determinação" id="Determinação">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      <div className="points">
        <span style={{ color: "#d37d8d" }}>7 pontos disponíveis</span>
        <span style={{ color: "#ffb083" }}>7 pontos disponíveis</span>
      </div>
      <button>Entrar no Clã</button>

      <Swiper
        slidesPerView={`${windowWidth <=460 ? 1 : windowWidth <= 780 ? 2 : 4}`}
        navigation
      >
        <div className="box-wrapper">
          <SwiperSlide>
            <div
              className="points-box"
              style={{
                background: "#fff6cc",
                boxShadow:
                  "1px 1px 15px 0 rgba(0, 0, 0, 0.3) inset 0px 0px 20px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img src={shariganImg} alt="sharigan" />
              <p>Sharigan Nível 1</p>
              <div className="icons-wrapper">
                <div>
                  <span>+3</span>
                  <img src={genImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={targetImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={agiImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={convImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={inteImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={conheImg} alt="" />
                </div>
              </div>
              <footer className="text-box">
                <h3>Ser Genin</h3>
                <h3>Ser Level 5 ou maior</h3>
                <h3>Ser do Cla Uchiha</h3>
                <button>Treinar</button>
              </footer>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="points-box">
              <img src={shariganImg} alt="sharigan" />
              <p>Sharigan Nível 1</p>
              <div className="icons-wrapper">
                <div>
                  <span>+3</span>
                  <img src={genImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={targetImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={agiImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={convImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={inteImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={conheImg} alt="" />
                </div>
              </div>
              <footer className="text-box">
                <h3>Ser Genin</h3>
                <h3>Ser Level 5 ou maior</h3>
                <h3 style={{ color: "#FF7D7D" }}>Ser do Cla Uchiha</h3>
                <button>Treinar</button>
              </footer>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="points-box">
              <img src={shariganImg} alt="sharigan" />
              <p>Sharigan Nível 1</p>
              <div className="icons-wrapper">
                <div>
                  <span>+3</span>
                  <img src={genImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={targetImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={agiImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={convImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={inteImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={conheImg} alt="" />
                </div>
              </div>
              <footer className="text-box">
                <h3>Ser Genin</h3>
                <h3>Ser Level 5 ou maior</h3>
                <h3 style={{ color: "#FF7D7D" }}>Ser do Cla Uchiha</h3>
                <button>Treinar</button>
              </footer>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="points-box">
              <img src={shariganImg} alt="sharigan" />
              <p>Sharigan Nível 1</p>
              <div className="icons-wrapper">
                <div>
                  <span>+3</span>
                  <img src={genImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={targetImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={agiImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={convImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={inteImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={conheImg} alt="" />
                </div>
              </div>
              <footer className="text-box">
                <h3>Ser Genin</h3>
                <h3>Ser Level 5 ou maior</h3>
                <h3 style={{ color: "#FF7D7D" }}>Ser do Cla Uchiha</h3>
                <button>Treinar</button>
              </footer>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="points-box">
              <img src={shariganImg} alt="sharigan" />
              <p>Sharigan Nível 1</p>
              <div className="icons-wrapper">
                <div>
                  <span>+3</span>
                  <img src={genImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={targetImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={agiImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={convImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={inteImg} alt="" />
                </div>
                <div>
                  <span>+3</span>
                  <img src={conheImg} alt="" />
                </div>
              </div>
              <footer className="text-box">
                <h3>Ser Genin</h3>
                <h3>Ser Level 5 ou maior</h3>
                <h3 style={{ color: "#FF7D7D" }}>Ser do Cla Uchiha</h3>
                <button>Treinar</button>
              </footer>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </Container>
  );
}
