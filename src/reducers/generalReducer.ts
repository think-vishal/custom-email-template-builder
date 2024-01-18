import { UPDATE_GENERAL_STYLES } from '../actions/contentActions';

const initialState = {
  generalStyles: {
    backgroundColor: 'white',
  },
};

const generalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_GENERAL_STYLES:
      return {
        ...state,
        generalStyles: {
          ...state.generalStyles,
          ...action.payload.styles,
        },
      };
    default:
      return state;
  }
};

export default generalReducer;
