import React from 'react'

/* styled */
import * as S from './styled'

/* Icons */
import { BsCheckLg } from 'react-icons/bs'

type PropsCardHabits = {
  checked: boolean
}

const CardHabits: React.FC<PropsCardHabits> = ({ checked }) => {
  return (
    <S.CardHabitsArea>
      <S.CardHabitsAreaInfo>
        <S.CardHabitsInfo>
          <S.CardHabitsTitle>Ler 1 capítulo de livro</S.CardHabitsTitle>
          <S.CardHabitsSequence>
            <S.SequenceInfo>Sequência atual: 3 dias</S.SequenceInfo>
            <S.SequenceInfo>Seu recorder: 5 dias</S.SequenceInfo>
          </S.CardHabitsSequence>
        </S.CardHabitsInfo>
        <S.CardHabitsChecked checked={checked}>
          <BsCheckLg size={28} color="#fff" />
        </S.CardHabitsChecked>
      </S.CardHabitsAreaInfo>
    </S.CardHabitsArea>
  )
}

export default CardHabits
