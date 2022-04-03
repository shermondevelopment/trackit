import React from 'react'

/* CiruclarProgressBar */
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'

/* styled */
import * as S from './styled'
import 'react-circular-progressbar/dist/styles.css'

/* router */
import { Link } from 'react-router-dom'

type FooterProps = {
  percentu?: number
}

const Footer: React.FC<FooterProps> = ({ percentu }) => {
  return (
    <S.Footer>
      <Link to="/habits">Hábitos</Link>
      <Link to="/today">
        <S.ProgressBar>
          <CircularProgressbar
            value={percentu}
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
      </Link>

      <Link to="/historic">Histórico</Link>
    </S.Footer>
  )
}

export default Footer
