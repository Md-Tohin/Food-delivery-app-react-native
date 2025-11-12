import {applyMiddleware, createStore} from 'redux';
import Reducers from './reducers';
import  {thunk}  from 'redux-thunk';


const Store = createStore(Reducers, applyMiddleware(thunk));

const getToken = () => Store?.getState()?.generalState?.token;

export { Store, getToken };


// import { applyMiddleware, createStore } from 'redux';
// import thunk from 'redux-thunk';
// import Reducers from './reducers';

// const Store = createStore(Reducers, applyMiddleware(thunk));

// // Token getter (used in API calls)
// const getToken = () => Store?.getState()?.generalState?.token;

// export { Store, getToken };