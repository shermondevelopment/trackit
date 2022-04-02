import React from 'react'

/* CiruclarProgressBar */
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

/* styled */
import * as S from './styled'
import 'react-circular-progressbar/dist/styles.css'

/* router */
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Link to="/habits">Hábitos</Link>
      <S.ProgressBar>
        <CircularProgressbar
          value={30}
          text="Hoje"
          backgroundPadding={30}
          styles={buildStyles({
            backgroundColor: 'green',
            textSize: '18px',
            pathColor: '#fff',
            trailColor: '#52B6FF',
            textColor: '#FFF',
          })}
        />
      </S.ProgressBar>
      <Link to="/habits">Histórico</Link>
    </S.Footer>
  )
}

export default Footer
