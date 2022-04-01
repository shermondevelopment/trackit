import React, {
  ReactElement,
  ReactEventHandler,
  useEffect,
  useState,
} from 'react'

/* Icons */
import { FiAlertCircle } from 'react-icons/fi'

/* Styles */
import * as S from './styled'

/* PropsType */

type PropsAlert = {
  type: string
  show: boolean
  setshowAlert: any
  children: React.ReactNode
}

const Alert: React.FC<PropsAlert> = ({
  children,
  type,
  show,
  setshowAlert,
}): ReactElement => {
  useEffect(() => {
    show &&
      setTimeout(() => {
        setshowAlert({ show: false })
      }, 4000)
  }, [show])

  return (
    <S.Alert type={type} show={show}>
      {type === 'error' && <FiAlertCircle size={22} />} <span>{children}</span>
    </S.Alert>
  )
}

export default Alert
