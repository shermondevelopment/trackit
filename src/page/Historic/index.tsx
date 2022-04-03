import React, { useState, useEffect } from 'react'

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

/*headers axios */
import headers from '../../settings/header'

/* axios */
import axios from 'axios'

const Historic: React.FC = () => {
  const [historic, setHistoric] = useState(null)
  const [value, onChange] = useState(new Date())
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

  useEffect(() => {
    axios
      .get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily`,
        { headers }
      )
      .then((historic) => setHistoric(historic.data))
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
            if (historic) {
              if (
                historic.find(
                  (x: any) => x.day == dayjs(date).format('DD/MM/YYYY')
                )
              ) {
                if (
                  historic.find((f: any) =>
                    f.habits.find((s: any) => s.done === false)
                  )
                ) {
                  return 'failed'
                } else {
                  return 'highlight'
                }
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
      <Footer />
    </>
  )
}

export default Historic
