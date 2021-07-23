import { Container } from "./style";

import heartImg from "../../assets/heart.png";
import chakraImg from "../../assets/chakra.png";
import staminaImg from "../../assets/stamina.png";
import { AiOutlineClockCircle } from "react-icons/ai";

export function InfoCard() {
  return (
    <Container>
      <div className="card">
        <div className="card-top">
          <div className="level">
            <span>LVL</span>
            <h1>98</h1>
          </div>
          <div className="specs">
            <div className="heart specs-item">
              <img src={heartImg} alt="Vida" />
              <div>
                <span>10000/10000</span>
                <span className="bar red"></span>
              </div>
            </div>

            <div className="specs-item">
              <img src={chakraImg} alt="Chakra" />
              <div>
                <span>10000/10000</span>
                <span className="bar blue"></span>
              </div>
            </div>

            <div className="specs-item">
              <img src={staminaImg} alt="Stamina" />
              <div>
                <span>10000/10000</span>
                <span className="bar yellow"></span>
              </div>
            </div>

            <div className="progress">
              <span>1000/110000</span>
            </div>
          </div>

          <div className="level next-level">
            <span>LVL</span>
            <h1>99</h1>
          </div>
        </div>
        <div className="card-bottom">
          <div>
            <AiOutlineClockCircle />
            <AiOutlineClockCircle />
            <AiOutlineClockCircle />
          </div>
          <div>
            <span>
            <AiOutlineClockCircle />
              9999
            </span>
            <span>
            <AiOutlineClockCircle />
              999.000
            </span>
            <AiOutlineClockCircle />
          </div>
        </div>
      </div>
    </Container>
  );
}
