import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, totalAmount } from "../redux/getSlice";

const Cart = () => {
  
  const cartData = useSelector((state) => state.web.cartArr);
  const totalPrice = useSelector((state) => state.web.totalprice);
  const dispatch = useDispatch();

  // const increment = () => {
  //   if (count >= 0) {
  //     setCount(count + 1);
  //   }
  // };

  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  useEffect(() => {
    dispatch(totalAmount());
  }, []);
  console.log(cartData);
  return (
    <div>
      <h1>Total Price of all items :{totalPrice}</h1>
      {cartData?.map((e) => {
        return (
          <div style={styles.container} key={e.id}>
            <p>{e.title}</p>
            <p>
              <img style={{ height: "100px", width: "100px" }} src={e.image} />
            </p>
            <p>${e.price}</p>
            <p>Quantity:{e.count}</p>

            {/* <button style={{height:"40px",width:"50px",margin:"10px",backgroundColor:"black",color:"whitesmoke",fontSize:"30px"}} onClick={increment}>+</button>
            <button style={{height:"40px",width:"50px",margin:"10px",backgroundColor:"black",color:"whitesmoke",fontSize:"30px"}} onClick={decrement}>-</button> */}


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
