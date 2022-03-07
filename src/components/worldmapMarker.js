import markerBeach from "../../public/images/Strand-Marker.svg"
import markerForest from "../../public/images/Wald-Marker.svg"
import markerMountain from "../../public/images/Berg-Marker.svg"
import {useNavigate} from "react-router-dom";

export default function WorldmapMarker ({type}) {
  const navigate = useNavigate()
  function switchRoute() {
    navigate(`../${type}`)
  }
  if (type === "beach") {
    return (
      <div onClick={switchRoute}>
        <img src={markerBeach} alt="Marker" className={`markerIcon ${type}`} />
      </div>
    )
  } else if (type === "forest") {
    return (
      <div onClick={switchRoute}>
        <img src={markerForest} alt="Marker" className={`markerIcon ${type}`} />
      </div>
    )
  } else if (type === "mountain") {
    return (
      <div onClick={switchRoute}>
        <img src={markerMountain} alt="Marker" className={`markerIcon ${type}`} />
      </div>
    )
  }
}