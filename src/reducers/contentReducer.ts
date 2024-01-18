import {
  ADD_CONTENT_ITEM,
  REMOVE_CONTENT_ITEM,
  UPDATE_BUTTON_STYLES,
  UPDATE_CONTENT_STYLES,
} from "../actions/contentActions";

export interface Content {
  id: number;
  layoutId: number;
  type: string;
  styles: any;
  content: string;
}

export interface ContentState {
  contentItems: Content[];
}

const initialState: ContentState = {
  contentItems: [],
};

const contentItemReducer = (
  state = initialState,
  action: any
): ContentState => {
  switch (action.type) {
    case ADD_CONTENT_ITEM:
      return {
        ...state,
        contentItems: [
          ...state.contentItems,
          {
            id: state.contentItems.length + 1,
            layoutId: action.payload.layoutId,
            type: action.payload.type,
            content: action.payload.content,
            styles: action.payload.styles,
          },
        ],
      };
    case REMOVE_CONTENT_ITEM:
      return {
        ...state,
        contentItems: state.contentItems.filter(
          (item: any) => item.id !== action.payload.contentItemId
        ),
      };
    case UPDATE_CONTENT_STYLES:
      return {
        ...state,
        contentItems: state.contentItems.map((item) =>
          item.id === action.payload.contentId
            ? {
              ...item,
              styles: {
                ...item.styles,
                ...action.payload.styles,
              },
            }
            : item
        ),
      };
    case UPDATE_BUTTON_STYLES:
      const { contentId, styles } = action.payload;
      const { buttonStyles } = styles;
      return {
        ...state,
        contentItems: state.contentItems.map((item) =>
          item.id === contentId
            ? {
              ...item,
              styles: {
                ...item.styles,
                buttonStyles: {
                  ...item.styles.buttonStyles,
                  ...buttonStyles,
                },
              },
            }
            : item
        ),
      };
    default:
      return state;
  }
};

export default contentItemReducer;
