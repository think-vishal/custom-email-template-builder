export enum LayoutActionTypes {
    ADD_LAYOUT = 'ADD_LAYOUT',
    UPDATE_LAYOUT_CONTENT = 'UPDATE_LAYOUT_CONTENT',
    REMOVE_LAYOUT = 'REMOVE_LAYOUT',
}

export const UPDATE_IMAGE_URL = 'UPDATE_IMAGE_URL';

export type LayoutAction =
    | { type: LayoutActionTypes.ADD_LAYOUT; payload: { type: string } }
    | { type: LayoutActionTypes.UPDATE_LAYOUT_CONTENT; payload: { id: number; content: string; position: any } }
    | { type: LayoutActionTypes.REMOVE_LAYOUT; payload: { id: number } };
