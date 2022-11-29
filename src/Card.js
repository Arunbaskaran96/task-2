function Card({ props, func, cart }) {
  return (
    <div className="col-md-3 main">
      <div className="img-div">
        <img className="pic" src={props.img} alt="pic"></img>
      </div>
      <div className="main-card">
        <h5>{props.name}</h5>
        <p>{props.rating}</p>
        <p>{props.price}</p>
        <button
          disabled={cart.some((item) => item.id === props.id)}
          onClick={() => func(props)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
