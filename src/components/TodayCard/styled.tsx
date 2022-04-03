import styled from 'styled-components'

export const HabitsDay = styled.div<{ selected: boolean; disabled: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${(props) => (props.selected ? '#fff' : '#dbdbdb')};
  margin-right: 4px;
  background: ${(props) => (props.selected ? '#CFCFCF' : '#fff')};
  pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
`
