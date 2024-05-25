import { Contact } from '../../components/Contact';
import { Header } from '../../components/Header';
import { Rooms } from '../../components/Rooms';
import { Form } from '../../components/Form';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <Rooms />
      <Form />
      <Contact />
    </div>
  );
};
