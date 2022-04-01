import React, { useState } from 'react'

/* Axios */
import axios, { AxiosError, AxiosResponse } from 'axios'

/* Link */
import { Link } from 'react-router-dom'

/* Components */
import Button from '../../components/Button'

/* Styled */
import * as S from './styled'

/* react-router */
import { useNavigate } from 'react-router-dom'

/* Alert */
import Alert from '../../components/Alert'

/* 
 Type Signin
*/

type SigninProps = {
  email: string
  password: string
}

const Signin: React.FC = () => {
  /* navigate */
  const navigate = useNavigate()

  /* state */
  const [isSubmited, setIsSubmited] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState({ show: false, alert: '' })

  const signin = async (data: SigninProps) =>
    await axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`,
      data
    )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmited(true)
    try {
      await signin({ email, password })
      navigate('/hoje')
    } catch (error: any) {
      setMessage({
        alert: error?.response.data.message,
        show: true,
      })
      setIsSubmited(false)
    }
  }

  return (
    <S.SigninContainer>
      <Alert show={message.show} type="error" setshowAlert={setMessage}>
        {message.alert}
      </Alert>
      <S.SigninArea>
        <S.SigninBanner>
          <img src="/assets/img/logo.png" alt="logo" />
        </S.SigninBanner>
        <S.SigninAreaInputs>
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="email"
              value={email}
              name="email"
              disabled={isSubmited}
              required
              placeholder="email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <input
              type="password"
              value={password}
              name="password"
              disabled={isSubmited}
              required
              placeholder="senha"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <Button disabled={isSubmited}>Entrar</Button>
            <Link to="/register">Não tem uma conta? Cadastre-se!</Link>
          </form>
        </S.SigninAreaInputs>
      </S.SigninArea>
    </S.SigninContainer>
  )
}

export default Signin
