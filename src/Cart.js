import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cart({ cart, removeCart }) {
  return (
    <ol class="list-group list-group-numbered">
      {cart.map((item) => {
        return (
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{item.name}</div>
              {item.price}
            </div>

            <button
              class="badge bg-primary rounded-pill"
              onClick={() => removeCart(item)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
        );
      })}
    </ol>
  );
}
export default Cart;
