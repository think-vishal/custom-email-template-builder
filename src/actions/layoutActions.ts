import { LayoutActionTypes, LayoutAction } from './types';

export const addLayout = (layoutType: string): LayoutAction => ({
    type: LayoutActionTypes.ADD_LAYOUT,
    payload: {
        type: layoutType,
    },
});

// export const updateLayoutContent = (layoutId: number, content: string): LayoutAction => ({
//     type: LayoutActionTypes.UPDATE_LAYOUT_CONTENT,
//     payload: {
//         id: layoutId,
//         content,
//     },
// });

export const removeLayout = (layoutId: number): LayoutAction => ({
    type: LayoutActionTypes.REMOVE_LAYOUT,
    payload: {
        id: layoutId,
    },
});
