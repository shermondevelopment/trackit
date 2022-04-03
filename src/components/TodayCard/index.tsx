import React, { useContext, useState } from 'react'

/* styled */
import * as S from './styled'

/* context */
import { AppTrackItContext } from '../../components/../context/TrackItContext'

type PropsToday = {
  title: string
  id: number
  disabled?: boolean
  able?: boolean
}

const TodayCard: React.FC<PropsToday> = ({ title, id, disabled, able }) => {
  const [selected, setSelected] = useState<boolean>(false)

  const { state, dispatch } = useContext(AppTrackItContext)

  const addDay = () => {
    !state.habits?.includes(id) &&
      dispatch({ type: 'addHabits', payload: { habits: [id] } })
    state.habits.includes(id) &&
      dispatch({
        type: 'removeHabits',
        payload: { habits: [...state.habits.filter((ha) => ha !== id)] },
      })

    console.log(state)
  }

  return (
    <S.HabitsDay
      onClick={() => {
        setSelected(!selected), addDay()
      }}
      selected={selected || able}
      disabled={disabled}
    >
      {title}
    </S.HabitsDay>
  )
}

export default TodayCard
