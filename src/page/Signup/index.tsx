import React, { useState } from 'react'

/* axios */
import axios from 'axios'

/* Components */
import Alert from '../../components/Alert'
import Button from '../../components/Button'

/* react-router */
import { useNavigate, Link } from 'react-router-dom'

/* Styled */
import * as S from './styled'

type SignupProps = {
  email: string
  password: string
  name: string
  image: string
}

const Signup = () => {
  /* navigate */
  const navigate = useNavigate()

  /* state */
  const [isSubmited, setIsSubmited] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [message, setMessage] = useState({ show: false, alert: '' })

  const signup = async (data: SignupProps) =>
    await axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`,
      data
    )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmited(true)
    try {
      await signup({ email, password, name, image })
      navigate('/')
    } catch (error: any) {
      setMessage({
        alert: error?.response.data.message,
        show: true,
      })
      setIsSubmited(false)
    }
  }

  return (
    <S.SignupContainer>
      <Alert show={message.show} type="error" setshowAlert={setMessage}>
        {message.alert}
      </Alert>
      <S.SignupArea>
        <S.SignupBanner>
          <img src="/assets/img/logo.png" alt="logo" />
        </S.SignupBanner>
        <S.SignupAreaInputs>
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
            <input
              type="text"
              value={name}
              name="email"
              disabled={isSubmited}
              required
              placeholder="nome"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <input
              type="url"
              value={image}
              name="foto"
              disabled={isSubmited}
              required
              placeholder="foto"
              onChange={(e) => setImage(e.currentTarget.value)}
            />
            <Button disabled={isSubmited}>Cadastrar</Button>
            <Link to="/">Já tem uma conta? Faça Login!</Link>
          </form>
        </S.SignupAreaInputs>
      </S.SignupArea>
    </S.SignupContainer>
  )
}

export default Signup
