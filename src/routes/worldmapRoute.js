import backgroundImage from "../images/IslandWorldMap.png";
import EnvDisplay from "../components/environmentalDisplay";
import WorldmapMarker from "../components/worldmapMarker";

export default function WorldMap () {
  var beach, forest, mountain
  console.log(localStorage.getItem('beachLock'))
  if (localStorage.getItem('beachLock') === 'false') {
    beach = <WorldmapMarker type="beach" />
  }
  if (localStorage.getItem('forestLock') === 'false') {
    forest = <WorldmapMarker type="forest" />
  }
  if (localStorage.getItem('mountainLock') === 'false') {
    mountain = <WorldmapMarker type="mountain" />
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