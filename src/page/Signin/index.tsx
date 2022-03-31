import React, { ReactElement } from 'react'

import { Link } from 'react-router-dom'

/* Components */
import Button from '../../components/Button'

/* Styled */
import * as S from './styled'

const Signin: React.FC = (): ReactElement => {
  return <S.SigninContainer>
    <S.SigninArea>
      <S.SigninBanner>
          <img src="/assets/img/logo.png" alt="logo" />
      </S.SigninBanner>
      <S.SigninAreaInputs>
        <form>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="senha" />
          <Button>Entrar</Button>
          <Link to="/register">Não tem uma conta? Cadastre-se!</Link>
        </form> 
      </S.SigninAreaInputs>
    </S.SigninArea>
  </S.SigninContainer>
}

export default Signin