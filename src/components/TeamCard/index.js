// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamCard} = this.props
    const {id, name, teamImageUrl} = teamCard

    return (
      <Link className="team-card-bg-container" to={`/team-matches/${id}`}>
        <img className="team-card-image" src={teamImageUrl} alt="team-url" />
        <h1 className="team-card-name">{name}</h1>
      </Link>
    )
  }
}

export default TeamCard
