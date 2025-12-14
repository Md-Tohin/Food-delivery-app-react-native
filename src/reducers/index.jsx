import { combineReducers } from "redux";

import GeneralReducer from "./GeneralReducer";
import CartReducer from "./CartReducer";

export default combineReducers({
    generalState: GeneralReducer,
    cartState: CartReducer,
});


// import { combineReducers } from 'redux';
// import GeneralReducer from './GeneralReducer';

// export default combineReducers({
//   generalState: GeneralReducer,
// });
