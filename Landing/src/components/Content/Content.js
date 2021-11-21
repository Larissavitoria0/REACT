import EmotionBox from "../EmotionBox/EmotionBox";
import heroImage from "../../assets/hero.png"

// EmotionBox Images
import confusao from "../../assets/confusao.jpg"
import curiosidade from "../../assets/curiosidade.jpg"
import esperanca from "../../assets/esperanca.jpg"
import frustracao from "../../assets/frustracao.jpg"
import orgulho from "../../assets/orgulho.jpg"
import tranquilidade from "../../assets/tranquilidade.jpg"
import vergonha from "../../assets/vergonha.jpg"
import paz from "../../assets/paz.png"

import './content.css'

function Content() {
  return (
    <div>
      <div className="intro">
        <div className="introText">
          <h1>Emoções</h1>
          <p>Emoção é uma reação a um estímulo ambiental e cognitivo que produz tanto experiências subjetivas, quanto alterações neurobiológicas significativas. Está associada ao temperamento, personalidade e motivações tanto reais quanto subjetivas.</p>

          <a href="#emotions">Minhas emoções</a>
        </div>
        <img className="introImage" src={heroImage} alt="" />
      </div>
      <div className="emotions" id="emotions">
        <EmotionBox imageUrl={vergonha} title="Vergonha" id="vergonha" description="" />
        <EmotionBox imageUrl={frustracao} title="Frustração" id="frustracao" description="" />
        <EmotionBox imageUrl={confusao} title="Confusão" id="confusao" description="" />
        <EmotionBox imageUrl={curiosidade} title="Curiosidade" id="curiosidade" description="" />
        <EmotionBox imageUrl={orgulho} title="Orgulho" id="orgulho" description="" />
        <EmotionBox imageUrl={esperanca} title="Esperança" id="esperanca" description="" />
        <EmotionBox imageUrl={tranquilidade} title="Tranquilidade" id="tranquilidade" description="" />
        <EmotionBox imageUrl={paz} title="Paz" id="paz" description="" />
      </div>
    </div>
  )
}

export default Content;
