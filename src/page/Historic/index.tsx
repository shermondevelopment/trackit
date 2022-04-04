import React, { useState, useEffect, useContext } from 'react'

/* dayjs */
import dayjs from 'dayjs'

/** Icons */
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai'

/* calendar */
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

/* Compoennts */
import Footer from '../../components/Footer'
import Header from '../../components/Header'

/** styled */
import * as S from './styled'

/* context */
import { AppTrackItContext } from '../../context/TrackItContext'

/* axios */
import axios from 'axios'

const Historic: React.FC = () => {
  const [historic, setHistoric] = useState(null)
  const [value, onChange] = useState(new Date())
  const [habitsInfo, setHabitsInfo] = useState(null)
  const [historicSelected, setHistoricSelected] = useState(null)

  const captureDateClicked = (date: Date) => {
    setHistoricSelected(null)
    const searchDate = dayjs(date).format('DD/MM/YYYY')
    const arrayHistoric = historic.find(
      (histo: any) => histo.day === searchDate
    )
    if (arrayHistoric) {
      setHistoricSelected(arrayHistoric)
    }
  }

  const amountNewStructureArray = (historic: any) => {
    const array: any = []
    historic.map((item: any) => {
      item.habits.map((habits: any) => {
        array.push({ day: item.day, done: habits.done })
      })
    })
    console.log(array)
    setHabitsInfo(array)
  }

  const { state } = useContext(AppTrackItContext)

  const user =
    localStorage.getItem('user') && JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    axios
      .get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily`,
        {
          headers: {
            Authorization: `Bearer ${user.token || state.token}`,
          },
        }
      )
      .then((historic) => {
        setHistoric(historic.data), amountNewStructureArray(historic.data)
      })
  }, [])

  return (
    <>
      <Header />
      <S.Main>
        <S.TitleHistoric>Histórico</S.TitleHistoric>
        <Calendar
          onChange={onChange}
          value={value}
          className={['myCalendar']}
          formatDay={(locale, date) => dayjs(date).format('DD')}
          tileClassName={({ date, view }) => {
            if (habitsInfo) {
              if (
                habitsInfo.find(
                  (habit: any) =>
                    habit.day === dayjs(date).format('DD/MM/YYYY') &&
                    habit.done === true
                )
              ) {
                return 'highlight'
              }
              if (
                habitsInfo.find(
                  (habit: any) =>
                    habit.day === dayjs(date).format('DD/MM/YYYY') &&
                    habit.done === false
                )
              ) {
                return 'failed'
              }
            }
          }}
          onClickDay={(e) => captureDateClicked(e)}
        />
        {historicSelected &&
          historicSelected.habits.map((item: any, index: number) => (
            <S.InfoHabits key={index} done={item.done}>
              {!item.done && (
                <S.Mark>
                  <AiOutlineClose size={50} color="tomato" />
                </S.Mark>
              )}
              {item.done && (
                <S.Mark>
                  <AiOutlineCheck size={50} color="#8CC654" />
                </S.Mark>
              )}
              <S.AreaInfo>
                <span>Data do hábito:</span> &nbsp; &nbsp;
                <span>{historicSelected.day}</span>
              </S.AreaInfo>
              <S.AreaInfo>
                <span>Hábito Concluído?:</span> &nbsp; &nbsp;
                <span>{item.done ? 'sim' : 'não'}</span>
              </S.AreaInfo>
              <S.AreaInfo>
                <span>Titulo do hábtio:</span> &nbsp; &nbsp;
                <span>&quot;{item.name}&quot;</span>
              </S.AreaInfo>
            </S.InfoHabits>
          ))}
      </S.Main>
      <Footer percentu={state.percentu} />
    </>
  )
}

export default Historic
