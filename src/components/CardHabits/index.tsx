import React, { useState } from 'react'

/* styled */
import * as S from './styled'

/* Icons */
import { BsCheckLg } from 'react-icons/bs'

//* axios */
import axios from 'axios'

/* headers */
import headers from '../../settings/header'

type PropsCardHabits = {
  name: string
  checked: boolean
  id: number
  done: boolean
  concluded: number
  currentSequence: number
  highestSequence: number
  setTotalConcluded: React.Dispatch<React.SetStateAction<number>>
}

const CardHabits: React.FC<PropsCardHabits> = ({
  id,
  done,
  name,
  currentSequence,
  highestSequence,
  concluded,
  setTotalConcluded,
}) => {
  const [markDone, setMarkDone] = useState<boolean>(done)

  const defineChecked = async () => {
    /*  if the habit is not marked */
    if (!markDone) {
      setTotalConcluded(concluded + 1)
      await axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        {},
        { headers }
      )
    }
  }

  const removeChecked = async () => {
    /*  if the habit is not marked */
    if (markDone) {
      setTotalConcluded(concluded > 0 ? concluded - 1 : 0),
        await axios.post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
          {},
          { headers }
        )
    }
  }

  return (
    <S.CardHabitsArea>
      <S.CardHabitsAreaInfo>
        <S.CardHabitsInfo>
          <S.CardHabitsTitle>{name}</S.CardHabitsTitle>
          <S.CardHabitsSequence>
            <S.SequenceInfo>
              Sequência atual:{' '}
              <span className={markDone || done ? 'sequence' : ''}>
                {markDone && currentSequence + 1} &nbsp;dias
              </span>{' '}
            </S.SequenceInfo>
            <S.SequenceInfo>
              Seu recorder:{' '}
              <span
                className={
                  currentSequence === highestSequence ? 'sequence' : ''
                }
              >
                {highestSequence} dias
              </span>{' '}
            </S.SequenceInfo>
          </S.CardHabitsSequence>
        </S.CardHabitsInfo>
        <S.CardHabitsChecked
          checked={markDone}
          onClick={() => {
            defineChecked(), markDone && removeChecked(), setMarkDone(!markDone)
          }}
        >
          <BsCheckLg size={0} color="#fff" />
        </S.CardHabitsChecked>
      </S.CardHabitsAreaInfo>
    </S.CardHabitsArea>
  )
}

export default CardHabits
