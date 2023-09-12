interface ICafe {
  id: number;
  name: string;
  description: string;
  logo: string;
  location: string;
}

interface cafeState {
  cafes: Array<ICafe>;
}

const cafeInitialState: cafeState = {
  cafes: [],
};

const cafeReducer = (
  state: cafeState = cafeInitialState,
  action: { type: String }
): cafeState => {
  switch (action.type) {
    case "GET_CAFES":
      return { ...state, cafes: [] };
    default:
      return state;
  }
};

export default cafeReducer;
