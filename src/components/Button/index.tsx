import React from 'react'


import * as S from './styled'

type PropsButton = {
  children: React.ReactNode
}

const Button: React.FC<PropsButton> = ({ children }) => {
  return (
    <S.Button>
      {children}
    </S.Button>
  )
}

export default Button