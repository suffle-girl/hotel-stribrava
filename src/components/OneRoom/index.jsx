import "./style.css"

export const OneRoom = ({ title, photo, price }) => {
  return (
    <div className="cards-row">
      <div className="card">
        <img className="card__image" src={photo} alt="Room" />
        <div className="card__title">{title}</div>
        <div className="card__body">{price}</div>
      </div>
    </div>
  );
};
