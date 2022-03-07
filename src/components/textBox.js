import {useNavigate} from "react-router-dom"

import mapIcon from "../images/maps.png"

export default function TextBox ({type}) {
  const navigate = useNavigate()
  function switchRoute () {
    navigate("../WorldMap")
  }
  if (type === "small") {
    return (
      <div className="boxContainer">
        <span className="spanText">Mit wem möchtest du reden ?</span>
        <img src={mapIcon} alt="Weltkarte" className="mapIcon" onClick={switchRoute} />
      </div>
    )
  } else if (type === "big") {
    return (
      <span>Big</span>
    )
  }
}