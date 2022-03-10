import backgroundImage from "../images/IslandWorldMap.png";
import EnvDisplay from "../components/environmentalDisplay";
import WorldmapMarker from "../components/worldmapMarker";

export default function WorldMap () {
  var beach, forest, mountain
  if (localStorage.getItem('beachLock') === 'false') {
    beach = <WorldmapMarker type="Beach" />
  }
  if (localStorage.getItem('forestLock') === 'false') {
    forest = <WorldmapMarker type="Forest" />
  }
  if (localStorage.getItem('mountainLock') === 'false') {
    mountain = <WorldmapMarker type="Mountain" />
  }
  return (
    <div className="maxSize" >
      <img className="fullBackgroundImage" src={backgroundImage} alt="Start Screen" />
      <p className="heading">Weltkarte</p>
      <p className="callToAction">Wohin möchtest du als nächstes gehen ?</p>
      <EnvDisplay />
      {beach}
      {forest}
      {mountain}
    </div>
  )
}