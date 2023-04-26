import api from "../../api/api";

export const getCategory = (response) => {
  return {
    type: "GET_LIST_CATEGORY",
    payload: response,
  };
};

export const getListChildCategory = (response) => {
  return {
    type: "GET_LIST_CHILD_CATEGORY",
    payload: response,
  };
};

export const getAllProductByIdCategory = (response) => {
  return {
    type: "GET_ALL_PRODUCT_BY_ID_CATEGORY",
    payload: response,
  };
};

export const getListCategory = () => {
  const fetchListCategory = async (dispatch) => {
    try {
      let response = await api.get(`/category`);
      dispatch(getCategory(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return fetchListCategory;
};

export const getListChildCate = (id) => {
  const fetchListChildCate = async (dispatch) => {
    try {
      let response = await api.get(`/category/${id}`);
      dispatch(getListChildCategory(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return fetchListChildCate;
};

export const getAllProduct = (id) => {
  const fetchGetAllProduct = async (dispatch) => {
    try {
      let response = await api.get(`/category/all-product/${id}`);
      console.log("Product by cateogry: " + JSON.stringify(response.data));
      dispatch(getAllProductByIdCategory(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return fetchGetAllProduct;
};
