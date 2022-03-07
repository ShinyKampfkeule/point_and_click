import backgroundImage from "../../../public/images/Strand.png"

import AnimalImage from "../../components/animalImage"
import TextBox from "../../components/textBox"

export default function BeachOverview () {
  let turtle, seastar, octo
  if (localStorage.getItem('turtleLock') === "false") {
    turtle = <AnimalImage animal="Schildkröte" />
  }
  if (localStorage.getItem('seastartLock') === "false") {
    seastar = <AnimalImage animal="Seestern" />
  }
  if (localStorage.getItem('octopusLock') === "false") {
    octo = <AnimalImage animal="Octopus" />
  }
  return (
    <>
      <img src={backgroundImage} alt="Strand Hintergrund" className="fullBackgroundImage" />
      <TextBox type="small"></TextBox>
      {turtle}
      {seastar}
      {octo}
    </>
  )
}