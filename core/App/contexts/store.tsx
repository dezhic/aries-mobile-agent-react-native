import React, { createContext, Dispatch, useContext, useReducer } from 'react'

import { State } from '../types/state'

import reducer, { ReducerAction } from './reducers/store'

export const initialStateFactory = (): State => {
  return {
    onboarding: {
      didAgreeToTerms: false,
      didCompleteTutorial: false,
      didCreatePIN: false,
      didConsiderBiometry: false,
    },
    authentication: {
      didAuthenticate: false,
    },
    loginAttempt: {
      loginAttempts: 0,
      servedPenalty: true,
    },
    lockout: {
      displayNotification: false,
    },
    privacy: {
      didShowCameraDisclosure: false,
    },
    preferences: {
      useBiometry: false,
    },
    credential: {
      revoked: new Set(),
      revokedMessageDismissed: new Set(),
    },
    error: null,
    loading: false,
  }
}
const initialState = initialStateFactory()

export const StoreContext = createContext<[State, Dispatch<ReducerAction>]>([
  initialState,
  () => {
    return
  },
])

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>
}

export const useStore = () => useContext(StoreContext)
