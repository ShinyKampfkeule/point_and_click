import {useLocation} from "react-router-dom";

import beachImage from "../images/Strand.png";
import forestImage from "../images/Forest.png";
import mountainImage from "../images/Mountain.jpg";
import turtle from "../images/SchildkröteTrans.png";
import seastar from "../images/SeesternTrans.png";
import octopus from "../images/OctopusTrans.png";
import deer from "../images/RehTrans.png";
import fox from "../images/FuchsTrans.png";
import squirrel from "../images/SchwarzhörnchenTrans.png"
import wolf from "../images/WolfTrans.png"
import eagle from "../images/AdlerTrans.png"
import stag from "../images/HirschTrans.png"

import TextBox from "../components/textBox";

export default function Conversation () {
  const location = useLocation()
  const {place, animal, quest, conversation} = location.state
  console.log(place, animal, quest, conversation)
  let backgroundImage, image, ownClass
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
      break
    case "seastar":
      image = seastar
      ownClass = "imageSeesternBig"
      break
    case "octopus":
      image = octopus
      ownClass = "imageOctopusBig"
      break
    case "deer":
      image = deer
      ownClass = "imageDeerBig"
      break
    case "fox":
      image = fox
      ownClass = "imageFoxBig"
      break
    case "squirrel":
      image = squirrel
      ownClass = "imageSquirrelBig"
      break
    case "wolf":
      image = wolf
      ownClass = "imageWolfBig"
      break
    case "eagle":
      image = eagle
      ownClass = "imageEagleBig"
      break
    case "stag":
      image = stag
      ownClass = "imageStagBig"
      break
  }
  return(
    <>
      <img src={backgroundImage} alt='Hintergrund' className="fullBackgroundImage" />
      <div className="imageWrapper">
        <img src={image} alt={animal} className={ownClass} />
      </div>
      <TextBox type="big" />
    </>
  )
}