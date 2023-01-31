import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/getSlice";

const SinglePage = () => {
  const location = useLocation();
  const dispatch=useDispatch()
  const cartData = useSelector((state) => state.web.cartArr);
  const { data } = location.state;
  const [count, setCount] = useState(1);



  const isPresent = (id) => {
    if (cartData.length !== 0) {
      let data = cartData.filter((e) => e.id === id);
      console.log(data, "data");
      if (data.length !== 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };


  const increment = () => {
    if (count >= 0) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div style={styles.maindiv}>
        <div style={styles.container}>
          <div style={styles.firstdiv}>
            <p>{data.title}</p>
            <p>
              <img
                style={{ height: "400px", width: "400px" }}
                src={data.image}
              />
            </p>
          </div>

          <div>
            <p>${data.price}</p>
            <p>
              Quantity:{count}
              <br/>
              <button onClick={increment}>+</button>
              <button onClick={decrement}>-</button>
            </p>

            <p>Total Price:${(count*Number(data.price)).toFixed(2)}</p>


            <button
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    height: "25px",
                    width: "100px",
                    margin: "5px",
                  }}
                  onClick={() => {
                    if (isPresent(data.id)) {
                      alert("already added to cart");
                    } else {
                      dispatch(addToCart({
                        ...data,
                        count:count
                      }));
                    }
                  }}
                >
                  Add to Cart
                </button>



          
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

const styles = {
  maindiv: {},
  container: {
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
    display: "flex",
    justifyContent:"space-evenly"
  },
  firstdiv: {},
};
