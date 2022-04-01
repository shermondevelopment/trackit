import styled from 'styled-components'

export const Button = styled.button<{ disabled: boolean }>`
  width: 303px;
  height: 45px;
  background: #52b6ff;
  border-radius: 4px;
  color: #fff;
  border: none;
  transition: opacity 0.3s linear;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? '0.5' : '1')};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`
