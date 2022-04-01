import styled from 'styled-components'

export const SignupContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SignupArea = styled.div`
  width: 100%;
  max-width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SignupBanner = styled.div``

export const SignupAreaInputs = styled.div`
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
    color: #afafaf;
    font-size: 16px;
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
