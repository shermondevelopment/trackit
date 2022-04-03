export type StateProps = {
  name: string
  email: string
  foto: string
  token: string
  titleHabits: string
  habits?: Array<number>
}

type StateAction = {
  name: string
  email: string
  foto: string
  token: string
  title: string
  habits: Array<number>
}

export const initialState: StateProps = {
  name: '',
  email: '',
  foto: '',
  token: '',
  titleHabits: '',
  habits: [],
}

export type ActionProps = {
  payload: StateAction
  type: string
}

export const useReducerTrackIt = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case 'addName':
      return { ...state, name: action.payload.name }
    case 'addFoto':
      return { ...state, foto: action.payload.foto }
    case 'addEmail':
      return { ...state, email: action.payload.email }
    case 'addTitleHabits':
      return { ...state, titleHabits: action.payload.title }
    case 'addToken':
      return { ...state, token: action.payload.token }
    case 'addHabits':
      return {
        ...state,
        habits: [...state.habits, ...action.payload.habits],
      }
    case 'removeHabits':
      return {
        ...state,
        habits: [...action.payload.habits],
      }
  }
  return state
}
