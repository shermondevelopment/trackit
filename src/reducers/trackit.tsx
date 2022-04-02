export type StateProps = {
  name: string
  email: string
  foto: string
}

export const initialState = {
  name: '',
  email: '',
  foto: '',
}

export type ActionProps = {
  payload: StateProps
  type: string
}

export const useReducerTrackIt = (
  state = initialState,
  action: ActionProps
) => {
  switch (action.type) {
    case 'addName':
      return { ...state, name: action.payload.name }
    case 'addFoto':
      return { ...state, foto: action.payload.foto }
    case 'addEmail':
      return { ...state, email: action.payload.email }
  }
  return state
}
