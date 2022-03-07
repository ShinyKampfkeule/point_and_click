import backgroundImage from "../images/IslandWorldMap.png"
import {useNavigate} from "react-router-dom";

export default function Start () {
  const navigate = useNavigate()
  function switchRoute() {
    navigate('../WorldMap')
  }
  return (
    <div className="maxSize">
      <img className="fullBackgroundImage" src={backgroundImage} alt="Start Screen" />
      <p className="gameTitle">New Dawn Island</p>
      <button className="startButton" onClick={switchRoute}>Abenteuer starten</button>
    </div>
  )
}