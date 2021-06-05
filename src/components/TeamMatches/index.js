// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    matchCards: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedTeamBannerUrl = data.team_banner_url

    const updatedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const updatedMatchCards = data.recent_matches.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      id: eachMatch.id,
      matchStatus: eachMatch.match_status,
      result: eachMatch.result,
    }))
    console.log(updatedMatchCards)
    this.setState({
      teamBannerUrl: updatedTeamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      matchCards: updatedMatchCards,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      matchCards,
      isLoading,
    } = this.state

    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(teamBannerUrl)
    return (
      <div
        className={`team-matches-bg-container team-matches-bg-${id.toLowerCase()}`}
      >
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div
            className={`team-matches-bg-container team-matches-bg-${id.toLowerCase()}`}
          >
            <img
              className="team-matches-banner"
              src={teamBannerUrl}
              alt="team-banner"
            />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <div className="team-matches-match-cards-container">
              {matchCards.map(eachCard => (
                <MatchCard matchCard={eachCard} key={eachCard.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
