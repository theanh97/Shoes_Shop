import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
import reducers from './reducers/index'; //Import the reducer
 
// Connect our store to the reducers
export default function getStore(){
	return createStore(reducers, applyMiddleware(thunk))
}
// export default createStore(reducers, applyMiddleware(thunk));