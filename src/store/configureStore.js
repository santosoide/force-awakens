import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers/stars_reducers'
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];

export default function Flux(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    if (module.hot) {
        module.hot.accept('../reducers/stars_reducers', () => {
            const nextRootReducer = require('../reducers/stars_reducers').default;
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}