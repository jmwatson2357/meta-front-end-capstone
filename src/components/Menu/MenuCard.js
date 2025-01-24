import "./MenuCard.css";
const MenuCard = ({ id, image, title, price, desc, handleOrder }) => {
  return (
    <div className="card">
      <div className="cardImage">
        <img src={image} alt="" />
      </div>
      <div className="menuContent">
        <div className="heading">
          <h3 className="cardTitle">{title}</h3>
          <p className="menuPrice">${price}</p>
        </div>
        <p className="highlight">{desc}</p>
        <button className="lead orderbtn" onClick={() => handleOrder(id)}>
          Order Now
        </button>
      </div>
    </div>
  );
};

export { MenuCard };
