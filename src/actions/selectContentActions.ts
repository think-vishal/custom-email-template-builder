import { SELECT_CONTENT_ITEM } from "../reducers/selectContentReducer";

export const selectContentItem = (item: any) => ({
    type: SELECT_CONTENT_ITEM,
    payload: item,
});
