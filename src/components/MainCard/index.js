import { Container } from "./style";

import b1Img from '../../assets/b1.png'
import b2Img from '../../assets/b2.png'
import card1img from '../../assets/card-1.png';
import card2img from '../../assets/card-2.png';

export default function MainCard() {
  return <Container>

   <div className="b-top">
     <img src={b2Img} alt="" />
     
   </div>

    <main className='card-wrapper'>
      <h3 style={{marginBottom: '3rem'}}>Escolha seu clã</h3>
      <div className='card'>
        <img className='card-active' src={card2img} alt="" />
        <img src={card1img} alt="" />
        <img src={card1img} alt="" />
        <img src={card1img} alt="" />
        <img src={card1img} alt="" />
        <img src={card1img} alt="" />
        <img src={card1img} alt="" />
      </div>
      <h3  style={{marginTop: '3rem'}}>Clã Uchiha</h3>
      <p>Alguns dos membros do clã ganham o poder do Sharingan, um olho vermelho que tem a habilidade de copiar ninjutsus, genjutsus e taijutsus com muita facilidade e armazená-los na mente para usá-los quando bem entender...</p>
    </main>

    <div className="b-bottom">
   
      <img src={b1Img} alt="" />
    </div>

  </Container>;
}
