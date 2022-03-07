import {useNavigate} from "react-router-dom";

import icon from "../images/Icon awesome-exclamation.png"
import turtle from "../images/SchildkröteTrans.png"
import seastar from "../images/SeesternTrans.png"
import octo from "../images/OctopusTrans.png"

export default function AnimalImage ({animal}) {
  const navigate = useNavigate()
  function switchRoute () {
    navigate("../Conversation", {state:{
      place: 'beach',
      animal: 'turtle',
      quest: 1,
      conversation: 1
    }})
  }
  let questIcon
  switch (animal) {
    case "Schildkröte":
      if (localStorage.getItem('turtleFirstTalk') === "false") {
        document.documentElement.style.setProperty("--turtleBrightness", 1)
      }
      if (localStorage.getItem('turtleQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageSchildkröte" >
          <img src={turtle} alt="Schildkröte" className="imageSchildkröteSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
    case "Seestern":
      if (localStorage.getItem('seastartQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageSeestern" >
          <img src={seastar} alt="Seestern" className="imageSeesternSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
    case "Octopus":
      if (localStorage.getItem('octopusQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageOctopus" >
          <img src={octo} alt="Octopus" className="imageOctopusSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
  }
}