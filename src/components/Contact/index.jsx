import "./style.css"
import mapa from "./img/mapa.png";

export const Contact = () => {
  return (
    <section className="dark">
    <div className="container columns-2">
      <div className="columns">
        <h2>Kontakt</h2>
        <p>
          Hotel Stříbrava
        </p>
        <p>
          Na Kamenné lávce 12
        </p>
        <p>
          317 24 Libnice nad Stříbravou
        </p>
        <p>
          recepce@hotelstribrava.cz
        </p>
      </div>
      <img src={mapa} />
    </div>
  </section>
  ) 
}


