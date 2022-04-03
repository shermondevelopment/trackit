import styled from 'styled-components'

export const Button = styled.button<{
  disabled: boolean
  width?: number
  height?: number
}>`
  width: ${(props) => (props.width ? props.width : '303')}px;
  height: ${(props) => (props.height ? props.height : '45')}px;
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
