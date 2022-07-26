export const initialState = {
  sample: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case SAMPLE:
    //   return {
    //     ...state,
    //     sample: action.value,
    //   };
    default:
      return state;
  }
};

export default reducer;
