import { getAllProducts } from "./redux/getSlice";

export const getProductsService = () => async (dispatch) => {
  await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
      dispatch(getAllProducts(res));
    });
};





