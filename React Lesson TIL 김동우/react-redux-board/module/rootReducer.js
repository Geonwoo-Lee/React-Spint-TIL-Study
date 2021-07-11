import { combineReducers } from 'redux';
//combineReduers는 여러개의 reducer를 하나로 합쳐
//내 보내는 기능을 수행합니다.
import boardReducer from './boardReducer';



const rootReducer = combineReducers({
    boardReducer
});

export default rootReducer;