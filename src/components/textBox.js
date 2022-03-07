import {useNavigate} from "react-router-dom"

import mapIcon from "../images/maps.png"

export default function TextBox ({type}) {
  const navigate = useNavigate()
  function switchRoute () {
    navigate("../WorldMap")
  }
  if (type === "small") {
    return (
      <div className="boxContainerSmall">
        <span className="spanText">Mit wem möchtest du reden ?</span>
        <img src={mapIcon} alt="Weltkarte" className="mapIcon" onClick={switchRoute} />
      </div>
    )
  } else if (type === "big") {
    return (
      <div className="boxContainerBig">
        <p className="spanName">Schildi Schildkröte</p>
        <p className="spanText">In letzter Zeit wurde hier schon wieder viel zu viel Müll aus dem Ozean angeschwemmt. Könntest du mir eventuell dabei helfen, den Müll aufzusammeln und wegzuschmeißen ?</p>
        <div className="answerWrapper">
          <button className="answerButton">Helfen!</button>
          <button className="answerButton">Nicht Helfen!</button>
        </div>
      </div>
    )
  }
}