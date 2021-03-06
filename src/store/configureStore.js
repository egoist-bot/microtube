import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import { throttle } from 'lodash';

import { saveState, loadState } from '../lib/localStorage';

import { pick } from '../lib/helpers';

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export default function configureStore() {
    const persistedState = loadState();
    const store = createStore(rootReducer, persistedState, enhancer);

    store.subscribe(
        throttle(() => {
            const { auth, player, search } = store.getState();

            saveState({
                auth,
                player,
                search: pick(search, ['query', 'forMine'])
            });
        }, 500)
    );

    return store;
}
