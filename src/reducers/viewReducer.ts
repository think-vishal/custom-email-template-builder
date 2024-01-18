const initialState = {
  viewType: 'desktop',
};

const viewReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_VIEW_TYPE':
      return {
        ...state,
        viewType: action.payload,
      };
    default:
      return state;
  }
};

export default viewReducer;
