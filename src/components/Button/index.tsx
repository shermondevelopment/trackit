import React from 'react'

/* Load Spinner */
import { ThreeDots } from 'react-loader-spinner'

import * as S from './styled'

type PropsButton = {
  children: React.ReactNode
  disabled: boolean
}

const Button: React.FC<PropsButton> = ({ children, disabled }) => {
  return (
    <S.Button disabled={disabled}>
      {disabled ? <ThreeDots color="#fff" height={13} /> : children}
    </S.Button>
  )
}

export default Button
