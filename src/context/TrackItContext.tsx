import React, { useReducer } from 'react'
import { createContext } from 'react'
import {
  useReducerTrackIt,
  initialState,
  StateProps,
  ActionProps,
} from '../reducers/trackit'

type ContextType = {
  state: StateProps
  dispatch: React.Dispatch<any>
}

export const AppTrackItContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
})

export const mainReducer = (state: StateProps, action: ActionProps) => ({
  ...useReducerTrackIt(state, action),
})

const AppTrackItProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <AppTrackItContext.Provider value={{ state, dispatch }}>
      {children}
    </AppTrackItContext.Provider>
  )
}

export default AppTrackItProvider
