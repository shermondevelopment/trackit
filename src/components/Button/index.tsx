import React from 'react'

/* Load Spinner */
import { ThreeDots } from 'react-loader-spinner'

import * as S from './styled'

type PropsButton = {
  width?: number
  height?: number
  children: React.ReactNode
  disabled: boolean
}

const Button: React.FC<PropsButton> = ({
  children,
  disabled,
  height,
  width,
}) => {
  return (
    <S.Button disabled={disabled} width={width} height={height}>
      {disabled ? <ThreeDots color="#fff" height={13} /> : children}
    </S.Button>
  )
}

export default Button
