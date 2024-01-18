import { UPDATE_IMAGE_URL } from "../actions/types";

const initialState = {
  imageUrl: "",
};

const imageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_IMAGE_URL:
      return {
        ...state,
        imageUrl: action.payload.url,
      };
    default:
      return state;
  }
};

export default imageReducer;
