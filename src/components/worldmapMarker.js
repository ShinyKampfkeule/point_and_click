import markerBeach from "../images/Strand-Marker.svg"
import markerForest from "../images/Wald-Marker.svg"
import markerMountain from "../images/Berg-Marker.svg"
import {useNavigate} from "react-router-dom";

export default function WorldmapMarker ({type}) {
  const navigate = useNavigate()
  function switchRoute() {
    navigate(`../${type}`, {state: {
      place: type
    }})
  }
  if (type === "Beach") {
    return (
      <div onClick={switchRoute}>
        <img src={markerBeach} alt="Marker" className={`markerIcon ${type}`} />
      </div>
    )
  } else if (type === "Forest") {
    return (
      <div onClick={switchRoute}>
        <img src={markerForest} alt="Marker" className={`markerIcon ${type}`} />
      </div>
    )
  } else if (type === "Mountain") {
    return (
      <div onClick={switchRoute}>
        <img src={markerMountain} alt="Marker" className={`markerIcon ${type}`} />
      </div>
    )
  }
}