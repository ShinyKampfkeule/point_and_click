import {useNavigate} from "react-router-dom";

import icon from "../images/Icon awesome-exclamation.png"
import turtle from "../images/SchildkröteTrans.png"
import seastar from "../images/SeesternTrans.png"
import octo from "../images/OctopusTrans.png"
import deer from "../images/RehTrans.png";
import fox from "../images/FuchsTrans.png";
import squirrel from "../images/SchwarzhörnchenTrans.png"
import wolf from "../images/WolfTrans.png"
import eagle from "../images/AdlerTrans.png"
import stag from "../images/HirschTrans.png"

export default function AnimalImage ({animal, place}) {
  const navigate = useNavigate()
  function switchRoute () {
    switch (animal) {
      case "turtle":
        localStorage.setItem('turtleFirstTalk', false)
        break
      case "seastar":
        localStorage.setItem('seastarFirstTalk', false)
        break
      case "octopus":
        localStorage.setItem('octopusFirstTalk', false)
        break
      case "deer":
        localStorage.setItem('deerFirstTalk', false)
        break
      case "fox":
        localStorage.setItem('foxFirstTalk', false)
        break
      case "squirrel":
        localStorage.setItem('squirrelFirstTalk', false)
        break
      case "wolf":
        localStorage.setItem('wolfFirstTalk', false)
        break
      case "eagle":
        localStorage.setItem('eagleFirstTalk', false)
        break
      case "stag":
        localStorage.setItem('stagFirstTalk', false)
        break
    }
    navigate("../Conversation", {state:{
      place: place,
      animal: animal,
      quest: 1,
      conversation: 1
    }})
  }
  let questIcon
  switch (animal) {
    case "turtle":
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
    case "seastar":
      if (localStorage.getItem('seastarFirstTalk') === "false") {
        document.documentElement.style.setProperty("--seastarBrightness", 1)
      }
      if (localStorage.getItem('seastarQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageSeestern" >
          <img src={seastar} alt="Seestern" className="imageSeesternSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
    case "octopus":
      if (localStorage.getItem('octopusFirstTalk') === "false") {
        document.documentElement.style.setProperty("--octopusBrightness", 1)
      }
      if (localStorage.getItem('octopusQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageOctopus" >
          <img src={octo} alt="Octopus" className="imageOctopusSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
    case "deer":
      if (localStorage.getItem('deerFirstTalk') === "false") {
        document.documentElement.style.setProperty("--deerBrightness", 1)
      }
      if (localStorage.getItem('deerQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageDeer" >
          <img src={deer} alt="Reh" className="imageDeerSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
    case "fox":
      if (localStorage.getItem('foxFirstTalk') === "false") {
        document.documentElement.style.setProperty("--foxBrightness", 1)
      }
      if (localStorage.getItem('foxQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageFox" >
          <img src={fox} alt="Fuchs" className="imageFoxSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
    case "squirrel":
      if (localStorage.getItem('squirrelFirstTalk') === "false") {
        document.documentElement.style.setProperty("--squirrelBrightness", 1)
      }
      if (localStorage.getItem('squirrelQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageSquirrel" >
          <img src={squirrel} alt="Eichhörnchen" className="imageSquirrelSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
    case "wolf":
      if (localStorage.getItem('wolfFirstTalk') === "false") {
        document.documentElement.style.setProperty("--wolfBrightness", 1)
      }
      if (localStorage.getItem('wolfQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageWolf" >
          <img src={wolf} alt="Wolf" className="imageWolfSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
    case "eagle":
      if (localStorage.getItem('eagleFirstTalk') === "false") {
        document.documentElement.style.setProperty("--eagleBrightness", 1)
      }
      if (localStorage.getItem('eagleQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageEagle" >
          <img src={eagle} alt="Adler" className="imageEagleSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
    case "stag":
      if (localStorage.getItem('stagFirstTalk') === "false") {
        document.documentElement.style.setProperty("--stagBrightness", 1)
      }
      if (localStorage.getItem('stagQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageStag" >
          <img src={stag} alt="Hirsch" className="imageStagSmall" onClick={switchRoute} />
          {questIcon}
        </div>
      )
  }
}