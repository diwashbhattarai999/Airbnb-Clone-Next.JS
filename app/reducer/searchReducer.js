const initialState = {
  location: null,
  step: 0,
  guestCount: 1,
  roomCount: 1,
  bathroomCount: 1,
  dateRange: {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ON_BACK":
      return { ...state, step: state.step - 1 };
    case "ON_NEXT":
      return { ...state, step: state.step + 1 };
    case "SET_LOCATION_TO_STEP":
      return { ...state, step: action.payload };
    case "SET_LOCATION":
      return { ...state, location: action.payload };
    case "SET_DATE_RANGE":
      return { ...state, dateRange: action.payload };
    case "SET_GUEST_COUNT":
      return { ...state, guestCount: action.payload };
    case "SET_ROOM_COUNT":
      return { ...state, roomCount: action.payload };
    case "SET_BATHROOM_COUNT":
      return { ...state, bathroomCount: action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export { initialState, reducer };
