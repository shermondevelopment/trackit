import styled from 'styled-components'

export const Alert = styled.div<{ type: string; show: boolean }>`
  width: 100%;
  max-width: 300px;
  background-color: ${(props) =>
    props.type === 'error' ? '#D32F2F' : '#388E3C'};
  color: #fff;
  height: 45px;
  padding: 6px 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: absolute;
  transition: top 0.3s linear;
  font-size: 14px;
  top: ${(props) => (props.show ? '80px' : '-200px')};

  span {
    margin-left: 15px;
  }
`
