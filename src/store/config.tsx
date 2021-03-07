import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage
}


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<any>
export type AppDispatch = typeof store.dispatch
