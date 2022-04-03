import styled from 'styled-components'

export const Main = styled.main`
  margin-top: 70px;
  padding: 28px 17px;
  background-color: #f2f2f2;
  min-height: calc(100vh - 140px);
`
export const HabitsAreaAdd = styled.div`
  display: flex;
  justify-content: space-between;
`
export const HabitsAddTitle = styled.h1`
  color: #126ba5;
  font-size: 23px;
  font-weight: 400;
`
export const HabitsAddAction = styled.div`
  width: 40px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #52b6ff;
  border-radius: 4px;
`
export const HabitsAlert = styled.span`
  display: block;
  color: #666666;
  font-size: 18px;
  margin-top: 30px;
`
export const HabitsAdd = styled.div`
  width: 100%;
  height: 180px;
  padding: 18px;
  margin-top: 22px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const HabitsAddFields = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    height: 45px;
    padding: 8px;
    font-size: 20px;
    border: 1px solid #d5d5d5;
    color: #666666;
    outline-color: #52b6ff;
    border-radius: 5px;
  }
  input::placeholder {
    color: #dbdbdb;
  }
`
export const HabitsDaysArea = styled.div`
  display: flex;
  margin-top: 8px;
`
export const HabitsDay = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #dbdbdb;
  margin-right: 4px;
`
export const HabitsActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: ##52b6ff;
    font-size: 16px;
    text-decoration: none;
    color: #52b6ff;
    margin-right: 23px;
  }
`
export const ListHabitsArea = styled.div`
  margin-top: 22px;
  margin-bottom: 100px;
`
export const HabitsCard = styled.div`
  width: 100%;
  min-width: 340px;
  height: 91px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
`
export const HabitsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
export const HabitsTitle = styled.span`
  font-size: 20px;
  color: #666666;
`
