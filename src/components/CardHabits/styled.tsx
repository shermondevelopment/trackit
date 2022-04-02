import styled from 'styled-components'

export const CardHabitsArea = styled.div`
  width: 100%;
  max-width: 340px;
  height: 94px;
  background: #fff;
  padding: 13px;
  border-radius: 5px;
  margin-bottom: 10px;
`
export const CardHabitsAreaInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CardHabitsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const CardHabitsChecked = styled.div<{ checked: boolean }>`
  width: 69px;
  height: 69px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.checked ? '#8FC549' : '#ebebeb')};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
`

export const CardHabitsSequence = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7px;
`

export const SequenceInfo = styled.span`
  font-size: 13px;
  color: #666666;
`
export const CardHabitsTitle = styled.span`
  color: #666666;
  font-size: 20px;
`
