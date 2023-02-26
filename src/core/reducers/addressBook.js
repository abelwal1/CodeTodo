const defaultState = {
  addresses: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "address/add":
      /** TODO: Prevent duplicate addresses */
      // Check address already exist or not
      let isAdressAlreadyExist = state.addresses.find(
        (x) => x.id === action.payload?.id
      );
      return isAdressAlreadyExist
        ? state
        : { ...state, addresses: [...state.addresses, action.payload] };
    case "address/remove":
      /** TODO: Write a state update which removes an address from the addresses array. */
      // Create new filtered address list without the address selected for removal.
      let newAddressList = state.addresses.filter(
        (x) => x.id !== action.payload
      );
      return { ...state, addresses: [...newAddressList] };
      return state;
    case "addresses/add": {
      return { ...state, addresses: action.payload };
    }
    default:
      return state;
  }
};

export default reducer;
