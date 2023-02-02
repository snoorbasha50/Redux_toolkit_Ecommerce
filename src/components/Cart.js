import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addIncrement,
  addToCart,
  removeCart,
  totalAmount,
} from "../redux/getSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.web.cartArr);
  const totalPrice = useSelector((state) => state.web.totalprice);
  const dispatch = useDispatch();

  const increment = (id) => {
    if (cartData.length > 0) {
      const currentObj = cartData.find((e) => e.id === id);
      const filterArr = cartData.filter((e) => e.id !== id);
      console.log(filterArr);

      // currentObj.count = currentObj.count + 1;

      let temp = {
        ...currentObj,

        count: currentObj.count + 1,
      };

      console.log(temp);

      var arr = [
        
        {
          ...temp,
        },
        ...filterArr,
        
      ];

      dispatch(addIncrement(arr));

      // setcartCount(currentObj.count+1)
    }
  };

  const decrement = () => {};

  useEffect(() => {
    dispatch(totalAmount());
  }, [cartData]);

  console.log("cartData", cartData);

  return (
    <div>
      <h1>Total Price of all items :{totalPrice.toFixed(2)}</h1>
      {cartData?.map((e) => {
        return (
          <div style={styles.container} key={e.id}>
            <p>{e.title}</p>
            <p>
              <img style={{ height: "100px", width: "100px" }} src={e.image} />
            </p>
            <p>${e.price}</p>
            <p>Quantity:{e.count}</p>

            <button
              style={{
                height: "40px",
                width: "50px",
                margin: "10px",
                backgroundColor: "black",
                color: "whitesmoke",
                fontSize: "30px",
              }}
              onClick={() => increment(e.id)}
            >
              +
            </button>
            <button
              style={{
                height: "40px",
                width: "50px",
                margin: "10px",
                backgroundColor: "black",
                color: "whitesmoke",
                fontSize: "30px",
              }}
              onClick={() => decrement(e.id)}
            >
              -
            </button>

            <p>Total Price :{(e.count * Number(e.price)).toFixed(2)}</p>
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
