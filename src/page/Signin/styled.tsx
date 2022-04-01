import styled from 'styled-components'

export const SigninContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SigninArea = styled.div`
  width: 100%;
  max-width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SigninBanner = styled.div``

export const SigninAreaInputs = styled.div`
  margin-top: 30px;

  & input {
    width: 303px;
    height: 40px;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 10px;
    outline-color: #52b6ff;
    margin-bottom: 6px;
  }

  input::placeholder {
    color: #dbdbdb;
  }

  a {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 14px;
    color: #52b6ff;
    margin-top: 20px;
  }
`
