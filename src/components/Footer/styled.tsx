import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  padding: 22px 36px;
  display: flex;
  justify-content: space-between;

  a {
    color: #52b6ff;
    text-decoration: none;
    font-size: 18px;
  }
`

export const ProgressBar = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 50%;
  background-color: #52b6ff;
  margin-top: -60px;
  padding: 6px;
  cursor: pointer;
`
