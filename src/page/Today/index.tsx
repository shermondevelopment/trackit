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
  const [habitsToday, setHabitsToday] = useState<Array<HabitsResponseAxios>>([])

  useEffect(() => {
    axios
      .get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`,
        { headers }
      )
      .then((habits) => setHabitsToday(habits.data))
  }, [])

  return (
    <>
      <Header />
      <S.Main>
        <S.InfoToday>
          <S.Today>Segunda, {dayjs().format('DD/MM')}</S.Today>
          <S.TodayPercentu>Nenhum hábito concluído ainda</S.TodayPercentu>
        </S.InfoToday>
        <S.AreaHabits>
          {habitsToday &&
            habitsToday.map((item) => (
              <CardHabits checked={item.done} key={item.id} />
            ))}
        </S.AreaHabits>
      </S.Main>
      <Footer />
    </>
  )
}

export default Today
