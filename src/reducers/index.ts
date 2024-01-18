import { combineReducers } from 'redux';
import contentItemReducer from './contentReducer';
import generalReducer from './generalReducer';
import imageReducer from './imageReducer';
import layoutReducer from './layoutReducer';
import selectContentReducer from './selectContentReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
    layouts: layoutReducer,
    contents: contentItemReducer,
    selectedContent: selectContentReducer,
    generalStyles: generalReducer,
    image: imageReducer,
    view: viewReducer
});

export default rootReducer;
