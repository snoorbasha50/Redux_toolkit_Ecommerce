import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsService } from "../apiService";
import { addToCart } from "../redux/getSlice";

const Product = () => {
  
  const[searching,setSearching]=useState([])
  const productsData = useSelector((state) => state.web.products);

  const cartData = useSelector((state) => state.web.cartArr);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSearch=(e)=>{
    console.log(e.target.value)
        if(e.target.value){
           const searchText=e.target.value;
           console.log(searchText,"search")
           const searchedProducts=productsData.filter(e=>e.title.toLowerCase().includes(searchText))
           console.log(searchedProducts,"products of search")
           setSearching(searchedProducts)
          

        }
  }

  useEffect(() => {
    
    dispatch(getProductsService());
    
  }, []);

  useEffect(()=>{
     setSearching(productsData)
  },[productsData])
  
  return (
    <div>
      <h1>
        <input
        style={{height:"30px",width:"50%",justifyContent:"center"}}
          type="text"
          placeholder="Search with name"
          // value={search}
          onChange={handleSearch}
          
        />
        
      </h1>
      <div style={styles.maindiv}>
        {searching
          // ?.filter((k) => k.title.includes(search.toLowerCase()))
          .map((e) => {
            return (
              <div>
              <div
                style={styles.container}
                key={e.id}
                onClick={() => navigate(`/single/${e.id}`,{
                  state:{
                    data:e
                  }
                })}
              >
                <p>{e.title}</p>
                <p>
                  <img
                    style={{ height: "100px", width: "100px" }}
                    src={e.image}
                  />
                </p>
                <p>${e.price}</p>
                <p style={{fontWeight:"700"}}>rating:{e.rating.rate}</p>
                {/* <button onClick={() => dispatch(addToCart(e))}>Add to Cart</button> */}
               
               
              </div>
              <button style={{backgroundColor:"black",color:"white",height:"25px",width:"100px",margin:"5px"}}
              onClick={() => {
                    if (isPresent(e.id)) {
                      alert("already added to cart");
                    } else {
                      dispatch(addToCart(e));
                    }
                  }}
                >
                  Add to Cart
                </button>
              
             </div>
              
            );
          })}
      </div>
      
    </div>
    
  );
};

export default Product;

const styles = {
  maindiv: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap:"10px"
  },
  container: {
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
      height:"280px",
      margin:"5px",
      padding:"5px"

  },
};
