function Nav({ cart }) {
  return (
    <div className="nav-div">
      <h3>Shopping</h3>
      <button>Cart-{cart.length}</button>
    </div>
  );
}

export default Nav;
