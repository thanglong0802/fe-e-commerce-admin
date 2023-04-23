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
      console.log("reducer child cate: " + JSON.stringify(response.data));
      dispatch(getListChildCategory(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  return fetchListChildCate;
};
