import icon from "../images/Icon awesome-exclamation.png"
import turtle from "../images/SchildkröteTrans.png"
import seastar from "../images/SeesternTrans.png"
import octo from "../images/OctopusTrans.png"

export default function AnimalImage ({animal}) {
  let questIcon
  switch (animal) {
    case "Schildkröte":
      if (localStorage.getItem('turtleQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageSchildkröte" >
          <img src={turtle} alt="Schildkröte" className="imageSchildkröteSmall" />
          {questIcon}
        </div>
      )
    case "Seestern":
      if (localStorage.getItem('seastartQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageSeestern" >
          <img src={seastar} alt="Seestern" className="imageSeesternSmall" />
          {questIcon}
        </div>
      )
    case "Octopus":
      if (localStorage.getItem('octopusQuest') === "true" ) {
        questIcon = <img src={icon} alt="Ausrufezeichen" className="imageAusrufezeichen" />
      }
      return (
        <div className="imageOctopus" >
          <img src={octo} alt="Octopus" className="imageOctopusSmall" />
          {questIcon}
        </div>
      )
  }
}