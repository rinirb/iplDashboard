// Write your code here
import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  render() {
    const {matchCard} = this.props
    const {competingTeam, competingTeamLogo, matchStatus, result} = matchCard
    let scoreClassName
    if (matchStatus === 'Won') {
      scoreClassName = 'match-card-won'
    } else {
      scoreClassName = 'match-card-lost'
    }
    console.log(matchCard)
    return (
      <div className="match-card-bg-container">
        <img
          className="match-card-competing-team-logo"
          src={competingTeamLogo}
          alt={competingTeam}
        />
        <p className="match-card-competing-team-name">{competingTeam}</p>
        <p className="match-card-result">{result}</p>
        <p className={scoreClassName}>{matchStatus}</p>
      </div>
    )
  }
}

export default MatchCard
