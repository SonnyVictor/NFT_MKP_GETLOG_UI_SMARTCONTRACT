import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { updateVersion } from './global/actions'
import transactions from './transactions/reducer'

type MergedState = {
  user: {
    [key: string]: any
  }
  transactions: {
    [key: string]: any
  }
}
const PERSISTED_KEYS: string[] = ['user', 'transactions']
const loadedState = load({ states: PERSISTED_KEYS }) as MergedState

const store = configureStore({
  reducer: {
    transactions
    
  },
  middleware: [...getDefaultMiddleware({ thunk: false } as any), save({ states: PERSISTED_KEYS })],
  preloadedState: loadedState,
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// test