import React, { useState, useContext, useEffect } from 'react'

/* Axios */
import axios from 'axios'

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

/* Context */
import { AppTrackItContext } from '../../context/TrackItContext'

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

  /* Context */
  const { dispatch } = useContext(AppTrackItContext)

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
      const response = await signin({ email, password })
      dispatch({ type: 'addFoto', payload: { foto: response.data.image } })
      localStorage.setItem('user', JSON.stringify(response.data))
      navigate('/today')
    } catch (error: any) {
      setMessage({
        alert: error?.response.data.message,
        show: true,
      })
      setIsSubmited(false)
    }
  }

  const userIsLogged = () => {
    const user = JSON.parse(localStorage.getItem('user') || '')
    if (user.token) {
      dispatch({ type: 'addName', payload: { name: user.name } })
      dispatch({ type: 'addFoto', payload: { foto: user.image } })
      dispatch({ type: 'addEmail', payload: { email: user.email } })
      navigate('/today')
    }
  }

  useEffect(() => {
    userIsLogged()
  }, [])

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
            <Link to="/signup">Não tem uma conta? Cadastre-se!</Link>
          </form>
        </S.SigninAreaInputs>
      </S.SigninArea>
    </S.SigninContainer>
  )
}

export default Signin
