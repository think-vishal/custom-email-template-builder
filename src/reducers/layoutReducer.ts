import { LayoutActionTypes, LayoutAction } from "../actions/types";

export interface Layout {
  id: number;
  type: string;
  content: string;
}

export interface LayoutState {
  layouts: Layout[];
}

const initialState: LayoutState = {
  layouts: [],
};

const layoutReducer = (
  state = initialState,
  action: LayoutAction
): LayoutState => {
  switch (action.type) {
    case LayoutActionTypes.ADD_LAYOUT:
      const newLayout: Layout = {
        id: state.layouts.length + 1,
        type: action.payload.type,
        content: "",
      };
      return {
        ...state,
        layouts: [...state.layouts, newLayout],
      };

    // case LayoutActionTypes.UPDATE_LAYOUT_CONTENT:
    //   return {
    //     ...state,
    //     layouts: state.layouts.map((layout) =>
    //       layout.id === action.payload.id ? { ...layout, content: action.payload.content } : layout
    //     ),
    //   };

    case LayoutActionTypes.REMOVE_LAYOUT:
      return {
        ...state,
        layouts: state.layouts.filter(
          (layout) => layout.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default layoutReducer;
