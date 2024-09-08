import './index.css'

import {Component} from 'react'

import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {TeamCardDetails} = this.props
    const {id, name, teamImageUrl} = TeamCardDetails

    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="name-image-container">
          <img src={teamImageUrl} className="image" alt={name} />
          <p className="heading"> {name} </p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
