const initialState = {
  category: [],
  childCategory: [],
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_LIST_CATEGORY":
      console.log("reducer parent cate: " + JSON.stringify(action.payload));
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
    default:
      return state;
  }
}

export default categoryReducer;
