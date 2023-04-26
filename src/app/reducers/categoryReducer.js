const initialState = {
  category: [],
  childCategory: [],
  products: [],
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LIST_CATEGORY":
      return {
        ...state,
        category: action.payload,
      };
    case "GET_LIST_CHILD_CATEGORY": {
      return {
        ...state,
        childCategory: action.payload,
      };
    }
    case "GET_ALL_PRODUCT_BY_ID_CATEGORY": {
      return {
        ...state,
        products: action.payload,
      };
    }
    default:
      return state;
  }
}

export default categoryReducer;
