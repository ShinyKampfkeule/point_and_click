import backgroundImage from "../images/IslandWorldMap.png"
import {useNavigate} from "react-router-dom";

export default function Start () {
  const navigate = useNavigate()
  function switchRoute(state) {
    switch (state) {
      case "start":
        //Game-Mode
        // localStorage.setItem('saveGame', true)
        // localStorage.setItem('envValue', 0)
        // localStorage.setItem('beachLock', false)
        // localStorage.setItem('forestLock', true)
        // localStorage.setItem('mountainLock', true)
        // localStorage.setItem('turtleLock', false)
        // localStorage.setItem('turtleQuest', true)
        // localStorage.setItem('turtleFirstTalk', true)
        // localStorage.setItem('seastarLock', true)
        // localStorage.setItem('seastarQuest', true)
        // localStorage.setItem('seastarFirstTalk', true)
        // localStorage.setItem('octopusLock', true)
        // localStorage.setItem('octopusQuest', true)
        // localStorage.setItem('octopusFirstTalk', true)
        // localStorage.setItem('deerLock', true)
        // localStorage.setItem('deerQuest', true)
        // localStorage.setItem('deerFirstTalk', true)
        // localStorage.setItem('foxLock', true)
        // localStorage.setItem('foxQuest', true)
        // localStorage.setItem('foxFirstTalk', true)
        // localStorage.setItem('squirrelLock', true)
        // localStorage.setItem('squirrelQuest', true)
        // localStorage.setItem('squirrelFirstTalk', true)
        // localStorage.setItem('wolfLock', true)
        // localStorage.setItem('wolfQuest', true)
        // localStorage.setItem('wolfFirstTalk', true)
        // localStorage.setItem('eagleLock', true)
        // localStorage.setItem('eagleQuest', true)
        // localStorage.setItem('eagleFirstTalk', true)
        // localStorage.setItem('stagLock', true)
        // localStorage.setItem('stagQuest', true)
        // localStorage.setItem('stagFirstTalk', true)
        //Debug-Mode
        localStorage.setItem('saveGame', true)
        localStorage.setItem('envValue', 0)
        localStorage.setItem('beachLock', false)
        localStorage.setItem('forestLock', false)
        localStorage.setItem('mountainLock', false)
        localStorage.setItem('turtleLock', false)
        localStorage.setItem('turtleQuest', true)
        localStorage.setItem('turtleFirstTalk', true)
        localStorage.setItem('seastarLock', false)
        localStorage.setItem('seastarQuest', true)
        localStorage.setItem('seastarFirstTalk', true)
        localStorage.setItem('octopusLock', false)
        localStorage.setItem('octopusQuest', true)
        localStorage.setItem('octopusFirstTalk', true)
        localStorage.setItem('deerLock', false)
        localStorage.setItem('deerQuest', true)
        localStorage.setItem('deerFirstTalk', true)
        localStorage.setItem('foxLock', false)
        localStorage.setItem('foxQuest', true)
        localStorage.setItem('foxFirstTalk', true)
        localStorage.setItem('squirrelLock', false)
        localStorage.setItem('squirrelQuest', true)
        localStorage.setItem('squirrelFirstTalk', true)
        localStorage.setItem('wolfLock', false)
        localStorage.setItem('wolfQuest', true)
        localStorage.setItem('wolfFirstTalk', true)
        localStorage.setItem('eagleLock', false)
        localStorage.setItem('eagleQuest', true)
        localStorage.setItem('eagleFirstTalk', true)
        localStorage.setItem('stagLock', false)
        localStorage.setItem('stagQuest', true)
        localStorage.setItem('stagFirstTalk', true)
        break
    }
    navigate('../WorldMap')
  }
  return (
    <div className="maxSize">
      <img className="fullBackgroundImage" src={backgroundImage} alt="Start Screen" />
      <p className="gameTitle">New Dawn Island</p>
      <button className="startButton" onClick={() => switchRoute("start")}>Abenteuer starten</button>
      <button className="continueButton" onClick={() => switchRoute("continue")}>Abenteuer fortsetzen</button>
    </div>
  )
}