import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 70px;
  padding: 28px 17px;
  background-color: #fff;
  min-height: calc(100vh - 140px);
  padding-bottom: 100px;

  .myCalendar {
    border: none;
    width: 100%;
    max-width: 340px;
    height: 402px;
    background: #fff;

    & > .react-calendar__navigation button {
      border: 2px dashed #52b6ff;
    }

    & > .react-calendar__viewContainer button {
      height 47.85px;
      box-sizing: border-box;
      border-radius: 50%;
    }

    .react-calendar__month-view__days {
     
    }

    .highlight {
      background: #75C465;
    }

    .failed {
      background: #ea5766;
    }
  }
`
export const TitleHistoric = styled.h1`
  color: #126ba5;
  font-size: 22.98px;
  margin-bottom: 11px;
`
export const InfoHabits = styled.div<{ done: boolean }>`
  background: ${(props) => (props.done ? '#ffff81' : '#EA5766')};
  padding: 10px;
  border-radius: 5px;
  position: relative;
  margin-bottom: 40px;
`

export const AreaInfo = styled.div`
  display: flex;
  margin-bottom: 30px;
`
export const Mark = styled.div`
  width: 60px;
  height: 60px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -30px;
  right: 16px;
`
