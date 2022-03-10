import {useLocation} from "react-router-dom";

import AnimalImage from "../components/animalImage"
import backgroundStrand from "../images/Strand.png"
import backgroundForest from "../images/Forest.png"
import backgroundMountain from "../images/Mountain.jpg"

import TextBox from "../components/textBox"

export default function Overview () {
  const location = useLocation()
  const {place} = location.state
  let image, textBox, animal1, animal2, animal3
  switch (place) {
    case ("Beach"):
      document.documentElement.style.setProperty('--backgroundColor', 'rgba(57, 192, 209, 0.8)')
      document.documentElement.style.setProperty('--borderColor', 'rgba(255, 195, 122, 1)')
      if (localStorage.getItem('turtleLock') === "false") {
        animal1 = <AnimalImage animal="turtle" place="beach" />
      }
      if (localStorage.getItem('seastarLock') === "false") {
        animal2 = <AnimalImage animal="seastar" place="beach" />
      }
      if (localStorage.getItem('octopusLock') === "false") {
        animal3 = <AnimalImage animal="octopus" place="beach" />
      }
      image = <img src={backgroundStrand} alt="Strand Hintergrund" className="fullBackgroundImage" />
      textBox = <TextBox type="small" />
      break
    case ("Forest"):
      document.documentElement.style.setProperty('--backgroundColor', 'rgba(20, 145, 85, 0.8)')
      document.documentElement.style.setProperty('--borderColor', 'rgba(107, 79, 61, 1)')
      if (localStorage.getItem('deerLock') === "false") {
        animal1 = <AnimalImage animal="deer" place="forest" />
      }
      if (localStorage.getItem('foxLock') === "false") {
        animal2 = <AnimalImage animal="fox" place="forest" />
      }
      if (localStorage.getItem('squirrelLock') === "false") {
        animal3 = <AnimalImage animal="squirrel" place="forest" />
      }
      image = <img src={backgroundForest} alt="Wald Hintergrund" className="fullBackgroundImage" />
      textBox = <TextBox type="small" />
      break
    case ("Mountain"):
      document.documentElement.style.setProperty('--backgroundColor', 'rgba(150, 154, 155, 0.8)')
      document.documentElement.style.setProperty('--borderColor', 'rgba(62, 67, 70, 1)')
      if (localStorage.getItem('wolfLock') === "false") {
        animal1 = <AnimalImage animal="wolf" place="mountain" />
      }
      if (localStorage.getItem('eagleLock') === "false") {
        animal2 = <AnimalImage animal="eagle" place="mountain" />
      }
      if (localStorage.getItem('stagLock') === "false") {
        animal3 = <AnimalImage animal="stag" place="mountain" />
      }
      image = <img src={backgroundMountain} alt="Berg Hintergrund" className="fullBackgroundImage" />
      textBox = <TextBox type="small" />
  }
  return (
    <>
      {image}
      {textBox}
      {animal1}
      {animal2}
      {animal3}
    </>
  )
}