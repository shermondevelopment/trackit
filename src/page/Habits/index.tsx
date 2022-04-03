import React, { useContext, useEffect, useState } from 'react'

/* components */
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import TodayCard from '../../components/TodayCard'

/* icons */
import { IoIosAdd } from 'react-icons/io'
import { FaRegTrashAlt } from 'react-icons/fa'

/* styled */
import * as S from './styled'
import Button from '../../components/Button'

/* react-router */
import { Link } from 'react-router-dom'

/* context */
import { AppTrackItContext } from '../../context/TrackItContext'

/* axios */
import axios from 'axios'

/* header axios */
import headers from '../../settings/header'

type HabitsData = {
  id: number
  name: string
  days: Array<number>
}

const days = [
  { title: 'D', id: 0 },
  { title: 'S', id: 1 },
  { title: 'T', id: 2 },
  { title: 'Q', id: 3 },
  { title: 'Q', id: 4 },
  { title: 'S', id: 5 },
  { title: 'S', id: 6 },
]

const Habits: React.FC = () => {
  /* context */
  const { state, dispatch } = useContext(AppTrackItContext)

  /* state */
  const [titleHabits, setTitleHabits] = useState<string>('')
  const [cancelAddHabits, setCancelAddHabits] = useState<boolean>(false)
  const [addHabitsView, setHabitsView] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [habits, setHabits] = useState<Array<HabitsData>>([])

  const addHabits = async () => {
    return await axios.post(
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
      {
        name: titleHabits,
        days: state.habits,
      },
      { headers }
    )
  }

  const deleteRequestHabits = async (id: number) => {
    await axios.delete(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`,
      { headers }
    )
  }

  const handleAddHabits = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setDisabled(true)
    if (state.habits.length <= 0) {
      alert('Selecione pelo menos um dia da semana')
      setDisabled(false)
      return
    }
    try {
      const { data } = await addHabits()
      data && setDisabled(false)
      setHabits([...habits, data])
      /* hidden form of add habits */
      setHabitsView(false)
      /* define title habits of form empty */
      setTitleHabits('')
      /* clean days habits  */
      dispatch({ type: 'removeHabits', payload: { habits: [] } })
    } catch (error) {
      setDisabled(false)
    }
  }

  const deleteHabits = async (id: number) => {
    const deletedHabits = confirm('Deseja deletar habíto?')
    if (!deletedHabits) return

    const searchHabits = habits.filter((habit) => habit.id !== id)
    setHabits(searchHabits)
    deleteRequestHabits(id)
  }

  useEffect(() => {
    axios
      .get(
        'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',
        { headers }
      )
      .then((habits) => setHabits(habits.data))
  }, [])

  return (
    <>
      <Header />
      <S.Main>
        <S.HabitsAreaAdd>
          <S.HabitsAddTitle>Meus hábitos</S.HabitsAddTitle>
          <S.HabitsAddAction
            onClick={() => {
              setHabitsView(true), setCancelAddHabits(!addHabitsView)
            }}
          >
            <IoIosAdd size={30} color="#fff" />
          </S.HabitsAddAction>
        </S.HabitsAreaAdd>
        {addHabitsView && (
          <form
            onSubmit={(e) => handleAddHabits(e)}
            style={{ display: cancelAddHabits ? 'none' : 'flex' }}
          >
            <S.HabitsAdd>
              <S.HabitsAddFields>
                <input
                  type="text"
                  required
                  value={titleHabits}
                  placeholder="nome do hábito"
                  disabled={disabled}
                  onChange={(e) => setTitleHabits(e.currentTarget.value)}
                />
                <S.HabitsDaysArea>
                  {days.map((day, key) => (
                    <TodayCard
                      title={day.title}
                      key={key}
                      id={day.id}
                      disabled={disabled}
                    />
                  ))}
                </S.HabitsDaysArea>
              </S.HabitsAddFields>
              <S.HabitsActions>
                <Link
                  to="#"
                  onClick={() => setCancelAddHabits(!cancelAddHabits)}
                >
                  Cancelar
                </Link>
                <Button disabled={disabled} width={84} height={35}>
                  Salvar
                </Button>
              </S.HabitsActions>
            </S.HabitsAdd>
          </form>
        )}
        <S.ListHabitsArea>
          {habits &&
            habits.map((habits) => (
              <S.HabitsCard key={habits.id}>
                <S.HabitsHeader>
                  <S.HabitsTitle>{habits.name}</S.HabitsTitle>
                  <FaRegTrashAlt
                    size={22}
                    onClick={() => deleteHabits(habits.id)}
                  />
                </S.HabitsHeader>
                <S.HabitsDaysArea>
                  {days.map((day) => (
                    <TodayCard
                      title={day.title}
                      key={day.id}
                      id={day.id}
                      able={habits.days.includes(day.id)}
                      disabled={true}
                    />
                  ))}
                </S.HabitsDaysArea>
              </S.HabitsCard>
            ))}
        </S.ListHabitsArea>
        {habits.length < 0 && (
          <S.HabitsAlert>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </S.HabitsAlert>
        )}
      </S.Main>
      <Footer percentu={state.percentu} />
    </>
  )
}

export default Habits
