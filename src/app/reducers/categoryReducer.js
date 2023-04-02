// Giá trị khởi tạo cho state
const initialState = {
  fakeCategory: [
    {
      id: 1,
      name: "Danh mục sản phẩm cha 1",
      subCategories: ["Danh mục sản phẩm con 1a", "Danh mục sản phẩm con 1b"],
    },
    {
      id: 2,
      name: "Danh mục sản phẩm cha 2",
      subCategories: ["Danh mục sản phẩm con 2a", "Danh mục sản phẩm con 2b"],
    },
  ],
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "show_category":
      return {
        fakeCategory: [...state.fakeCategory],
      };
    default:
      return state.fakeCategory;
  }
}

export default categoryReducer;
