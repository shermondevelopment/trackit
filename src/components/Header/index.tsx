import React, { useContext } from 'react'

/* Styles */
import * as S from './styled'

/* Context */
import { AppTrackItContext } from '../../context/TrackItContext'

const Header = () => {
  const { state } = useContext(AppTrackItContext)

  return (
    <S.Header>
      <img src="/assets/img/trackit.svg" alt="trackit" />
      <S.Profile src={state.foto} alt="profile" />
    </S.Header>
  )
}

export default Header
