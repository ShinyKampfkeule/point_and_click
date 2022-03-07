import {useLocation} from "react-router-dom";

import beachImage from "../images/Strand.png";
import forestImage from "../images/Forest.png";
import mountainImage from "../images/Mountain.jpg";
import turtle from "../images/SchildkröteTrans.png";

import TextBox from "../components/textBox";

export default function Conversation () {
  const location = useLocation()
  const {place, animal, quest, conversation} = location.state
  let backgroundImage, image, ownClass
  console.log(`${place}, ${animal}, ${quest}, ${conversation}`)
  switch (place) {
    case "beach":
      backgroundImage = beachImage
      break
    case "forest":
      backgroundImage = forestImage
      break
    case "mountain":
      backgroundImage = mountainImage
  }
  switch (animal) {
    case "turtle":
      image = turtle
      ownClass = "imageSchildkröteBig"
  }
  return(
    <>
      <img src={backgroundImage} alt="Strand Hintergrund" className="fullBackgroundImage" />
      <div className="imageWrapper">
        <img src={image} alt="Schildkröte" className={ownClass} />
      </div>
      <TextBox type="big" />
    </>
  )
}