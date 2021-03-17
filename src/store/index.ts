import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducer from '@reducers/index'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '@sagas/index'

const bindMiddleware = (middleware: any) => {
    if (process.env.NODE_ENV !== 'production') {
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const reducers = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

const configureStore: any = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store: any = createStore(reducers, bindMiddleware([sagaMiddleware]))
    store.sagaTask = sagaMiddleware.run(rootSaga)
    return store
}

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
})

export default wrapper
