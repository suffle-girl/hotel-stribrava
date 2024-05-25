import { Contact } from '../../components/Contact';
import { Header } from '../../components/Header';
import { Rooms } from '../../components/Rooms';
import { Form } from '../../components/Form';
import './style.css';

const response = await fetch("http://localhost:4000/api/pokoje");
const data = await response.json();
const pokoje = data.data;
console.log(pokoje)
console.log(pokoje[0].title)

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Rooms title={pokoje.title} photo={pokoje.photo} price={pokoje.price} />
      <Form />
      <Contact />
    </div>
  );
};
