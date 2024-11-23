export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((c) => c.id !== action.payload) };
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    default:
      return state;
  }
};


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

export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST':
      return { ...state, wishlist: [...state.wishlist, action.payload] };
    case 'REMOVE_FROM_WISHLIST':
      return { ...state, wishlist: state.wishlist.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};


export const orderReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return { ...state, orders: [...state.orders, action.payload] };
    case 'REMOVE_ORDER':
      return { ...state, orders: state.orders.filter(order => order.id !== action.payload) };
    default:
      return state;
  }
};