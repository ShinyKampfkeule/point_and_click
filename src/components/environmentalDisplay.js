import icon from "../images/environment.png"

export default function EnvDisplay () {
  if (localStorage.getItem('envValue') < 25) {
    document.documentElement.style.setProperty("--envDisplayColor", "rgb(255, 0, 0)")
  } else if (localStorage.getItem('envValue') < 50) {
    document.documentElement.style.setProperty("--envDisplayColor", "rgb(255, 153, 0)")
  } else if (localStorage.getItem('envValue') < 75) {
    document.documentElement.style.setProperty("--envDisplayColor", "rgb(255, 230, 0)")
  } else if (localStorage.getItem('envValue') < 100) {
    document.documentElement.style.setProperty("--envDisplayColor", "rgb(161, 209, 32)")
  } else if (localStorage.getItem('envValue') == 100) {
    document.documentElement.style.setProperty("--envDisplayColor", "rgb(58, 170, 53)")
  }
  return (
    <div className="envDisplayWrapper">
      <div className="envDispCircle"></div>
      <div className="envDispRectangle"></div>
      <div className="envDispCircleInner"></div>
      <img src={icon} alt="Environmental Value" className="envIcon"/>
      <p className="envValue">{localStorage.getItem('envValue')}%</p>
    </div>
  )
}