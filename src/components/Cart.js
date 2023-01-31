import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../redux/getSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.web.cartArr);
  const dispatch = useDispatch();
  console.log(cartData);
  return (
    <div>
      {cartData?.map((e) => {
        return (
          <div style={styles.container} key={e.id}>
            <p>{e.title}</p>
            <p>
              <img style={{ height: "100px", width: "100px" }} src={e.image} />
            </p>
            <p>${e.price}</p>
            <p>Quantity:{e.count}</p>
            <button onClick={() => dispatch(removeCart(e))}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;

const styles = {
  maindiv: {
    display: "grid",
    gridTemplateColumns: "auto auto ",
  },
  container: {
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
  },
};
