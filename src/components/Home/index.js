// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {homePageData: [], isLoading: true}

  componentDidMount() {
    this.getHomePage()
  }

  getHomePage = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))

    this.setState({homePageData: updatedData, isLoading: false})
  }

  render() {
    const {homePageData, isLoading} = this.state
    return (
      <div className="home-bg-container">
        <div className="home-logo-container">
          <img
            className="home-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl-logo"
          />
          <h1 className="home-title">IPL Dashboard</h1>
        </div>
        <div className="home-team-cards-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            homePageData.map(eachData => (
              <TeamCard teamCard={eachData} key={eachData.id} />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default Home
