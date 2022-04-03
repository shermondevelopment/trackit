import React, { useEffect, useState } from 'react'

/* dayjs */
import dayjs from 'dayjs'

/* axios */
import axios from 'axios'

/* Style */
import * as S from './styled'

/* settings */
import headers from '../../settings/header'

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

  const percentu = (100 * totalConcluded) / totalHabits

  useEffect(() => {
    axios
      .get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
        { headers }
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
      <Footer />
    </>
  )
}

export default Today
