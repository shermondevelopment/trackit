import React from 'react'

/* Styles */
import * as S from './styled'

const Header = () => {
  return (
    <S.Header>
      <img src="/assets/img/trackit.svg" alt="trackit" />
      <S.Profile
        src="https://www.dicaspetz.com.br/wp-content/uploads/2020/04/meu-primeiro-gato.jpg"
        alt="profile"
      />
    </S.Header>
  )
}

export default Header
