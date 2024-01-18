export const SELECT_CONTENT_ITEM = 'SELECT_CONTENT_ITEM';

const initialState = {
  selectedContentItem: null,
};

const selectContentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_CONTENT_ITEM:
      return {
        ...state,
        selectedContentItem: action.payload,
      };
    default:
      return state;
  }
};

export default selectContentReducer;
