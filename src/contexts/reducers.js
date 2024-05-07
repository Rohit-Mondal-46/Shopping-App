export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((c) => c.id !== action.payload) };
    default:
      return state;
  }
}
export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return { ...state, sort: action.payload };
    case 'SORT_BY_STOCK':
      return { ...state, byStock: !state.byStock };
    case 'SORT_BY_RATINGS':
      return { ...state, byRatings: action.payload };
    case 'SORT_BY_FASTDELIVERY':
      return { ...state, byFastdelivery: !state.byFastdelivery };
    case 'SORT_BY_QUERY':
      return { ...state, byQuery: action.payload };
    case 'CLEAR_ALL_FILTERS':
      return {
        byStock: true,
        byFastdelivery: false,
        sort: "",
        byRatings: 0,
        byQuery: ""
      }
    default:
      return state;
  }
}

