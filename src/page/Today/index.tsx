import React, { useEffect, useState, useContext } from 'react'

/* conext */
import { AppTrackItContext } from '../../context/TrackItContext'

/* dayjs */
import dayjs from 'dayjs'

/* axios */
import axios from 'axios'

/* Style */
import * as S from './styled'

/* settings */

/* Components */
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CardHabits from '../../components/CardHabits'

type HabitsResponseAxios = {
  id: number
  name: string
  done: boolean
  currentSequence: number
  highestSequence: number
}

const Today = () => {
  const [habitsToday, setHabitsToday] =
    useState<Array<HabitsResponseAxios>>(null)
  const [totalConcluded, setTotalConcluded] = useState<number>(0)
  const [totalHabits, setTotaHabits] = useState<number>(0)

  const percentu = Math.floor((100 * totalConcluded) / totalHabits)

  /* context */
  const { state, dispatch } = useContext(AppTrackItContext)

  const infoUser =
    localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    axios
      .get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
        {
          headers: {
            Authorization: `Bearer ${state.token || infoUser.token}`,
          },
        }
      )
      .then((habits) => {
        setHabitsToday(habits.data),
          setTotaHabits(habits.data.length),
          setTotalConcluded(
            habits.data.filter((h: HabitsResponseAxios) => h.done === true)
              .length
          )
      })
  }, [])

  useEffect(() => {
    dispatch({ type: 'addPercentu', payload: { percentu } })
    dispatch({
      type: 'addConcluded',
      payload: { concluded: totalConcluded },
    })
    dispatch({
      type: 'addTotalHabits',
      payload: { totalHabits: totalHabits },
    })
  }, [percentu])

  return (
    <>
      <Header />
      <S.Main>
        <S.InfoToday>
          <S.Today>Segunda, {dayjs().format('DD/MM')}</S.Today>
          {!percentu && (
            <S.TodayPercentu>Nenhum hábito concluído ainda</S.TodayPercentu>
          )}
          {percentu > 0 && (
            <S.TodayPercentu style={{ color: '#8FC549' }}>
              {percentu}% dos hábitos concluídos
            </S.TodayPercentu>
          )}
        </S.InfoToday>
        <S.AreaHabits>
          {habitsToday &&
            habitsToday.map((item) => (
              <CardHabits
                name={item.name}
                currentSequence={item.currentSequence}
                highestSequence={item.highestSequence}
                checked={item.done}
                key={item.id}
                id={item.id}
                done={item.done}
                concluded={totalConcluded}
                setTotalConcluded={setTotalConcluded}
              />
            ))}
        </S.AreaHabits>
      </S.Main>
      <Footer percentu={state.percentu || percentu} />
    </>
  )
}

export default Today
