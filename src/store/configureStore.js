import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/stars_reducers'
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];

export default function Apps(initialState) {
    const finalCreateStore = compose(
        applyMiddleware(...middlewares),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);

    const store = finalCreateStore(reducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers/stars_reducers', () => {
            const nextRootReducer = require('../reducers/stars_reducers').default;
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}