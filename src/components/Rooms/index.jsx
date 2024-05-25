import { OneRoom } from "../OneRoom"
import "./style.css"
import pokoj01 from "./img/pokoj01.jpg";
import pokoj02 from "./img/pokoj02.jpg";
import pokoj03 from "./img/pokoj03.jpg";
import pokoj04 from "./img/pokoj04.jpg";
import pokoj05 from "./img/pokoj05.jpg";

export const Rooms = ({title, photo, price}) => {
  return (
    <section className="dark">
    <div className="container">
      <h2>Naše pokoje</h2>
      <p>
        Vyberte si, který z našich pokojů je pro Vás ten pravý.
      </p>
      <div className="cards-row">
        <OneRoom title={title} photo={photo} price={price}/>
        <OneRoom title={"Základ"} photo={pokoj02} price={"700 Kč na osobu"}/>
        <OneRoom title={"Klasik"} photo={pokoj03} price={"1200 Kč na osobu"}/>
        <OneRoom title={"Komfort"} photo={pokoj04} price={"2500 Kč na osobu"}/>
        <OneRoom title={"Luxus"} photo={pokoj05} price={"8000 Kč na osobu"}/>
       
      </div>
    </div>
  </section>
  )
}




