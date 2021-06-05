// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchDetails
    console.log(latestMatchDetails)
    return (
      <div className="latest-match-bg-container">
        <h1 className="latest-match-title">Latest Matches</h1>
        <div className="latest-match-container">
          <div className="latest-match-competing-team-match-details-container">
            <div className="latest-match-competing-team-match-details">
              <h1 className="latest-match-competing-team-name">
                {competingTeam}
              </h1>
              <h1 className="latest-match-date">{date}</h1>
              <p className="latest-match-details">{venue}</p>
              <p className="latest-match-details">{result}</p>
            </div>
            <div className="latest-match-competing-team-logo-container">
              <img
                className="latest-match-competing-team-logo"
                src={competingTeamLogo}
                alt={competingTeam}
              />
            </div>
          </div>
          <div className="latest-match-other-details-container">
            <p className="latest-match-other-details-heading">First Innings</p>
            <p className="latest-match-other-details-description">
              {firstInnings}
            </p>
            <p className="latest-match-other-details-heading">Second Innings</p>
            <p className="latest-match-other-details-description">
              {secondInnings}
            </p>
            <p className="latest-match-other-details-heading">
              Man Of The Match
            </p>
            <p className="latest-match-other-details-description">
              {manOfTheMatch}
            </p>
            <p className="latest-match-other-details-heading">Umpires</p>
            <p className="latest-match-other-details-description">{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
