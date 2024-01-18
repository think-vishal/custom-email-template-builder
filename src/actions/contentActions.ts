export const ADD_CONTENT_ITEM = 'ADD_CONTENT_ITEM';
export const REMOVE_CONTENT_ITEM = 'REMOVE_CONTENT_ITEM';
export const UPDATE_CONTENT_STYLES = 'UPDATE_CONTENT_STYLES';
export const UPDATE_GENERAL_STYLES = 'UPDATE_GENERAL_STYLES';
export const UPDATE_BUTTON_STYLES = 'UPDATE_BUTTON_STYLES';
export const UPDATE_CONTENT_FONT_FAMILY = 'UPDATE_CONTENT_FONT_FAMILY';
export const UPDATE_CONTENT_FONT_WEIGHT = 'UPDATE_CONTENT_FONT_WEIGHT';
export const UPDATE_CONTENT_FONT_SIZE = 'UPDATE_CONTENT_FONT_SIZE';

export const addContentItem = (layoutId: number, type: string, content: string, styles: any) => ({
    type: ADD_CONTENT_ITEM,
    payload: { layoutId, type, content, styles },
});

export const removeContentItem = (layoutId: number, contentItemId: number) => ({
    type: REMOVE_CONTENT_ITEM,
    payload: { layoutId, contentItemId },
});

export const updateContentStyles = (contentId: number, styles: any) => ({
    type: UPDATE_CONTENT_STYLES,
    payload: { contentId, styles },
});

export const updateGeneralBgColor = (styles: any) => ({
    type: UPDATE_GENERAL_STYLES,
    payload: { styles },
});

export const updateButtonStyles = (contentId: number, styles: any) => ({
    type: UPDATE_BUTTON_STYLES,
    payload: { contentId, styles },
});
