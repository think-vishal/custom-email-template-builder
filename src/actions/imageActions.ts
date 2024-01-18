// actions/imageActions.js
import { UPDATE_IMAGE_URL } from './types';

export const updateImageUrl = (url: any) => ({
    type: UPDATE_IMAGE_URL,
    payload: { url },
});
