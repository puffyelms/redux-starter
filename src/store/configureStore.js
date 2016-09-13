import {createStore} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import applyMiddleware from 'redux';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState//,
    // applyMiddleware(reduxImmutableStateInvariant())
  );
}
