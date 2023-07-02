import {Component} from 'react'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      seconds: 60,
      selectedTab: 'FRUIT',
      isGameOver: false,
    }
    const {imagesList} = this.props
    this.randImgItem = imagesList[0 / 1]
  }

  componentDidMount() {
    this.setState({score: 0})
    this.uniqId = setInterval(() => {
      this.setState(prevState => ({seconds: prevState.seconds - 1}))
    }, 1000)
  }

  changeTab = tabId => {
    this.setState({selectedTab: tabId})
  }

  playAgain = () => {
    this.setState({seconds: 60, isGameOver: false})
    this.componentDidMount()
  }

  validateClickedImg = id => {
    if (id === this.randImgItem.id) {
      this.setState(prevState => ({score: prevState.score + 1}))
      const {imagesList} = this.props
      this.randImgItem =
        imagesList[Math.floor(Math.random() * imagesList.length)]
    } else {
      clearInterval(this.uniqId)
      this.setState({isGameOver: true})
    }
  }

  render() {
    const {tabsList, imagesList} = this.props
    const {score, seconds, selectedTab, isGameOver} = this.state
    if (!isGameOver && seconds === 0) {
      clearInterval(this.uniqId)
      this.setState({isGameOver: true})
    }

    const filterImageList = imagesList.filter(
      each => each.category === selectedTab,
    )

    return (
      <div className="bg-container">
        <nav className="navbar-container">
          <img
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
          <ul className="score-timer-container">
            <li>
              <p className="score-para">
                Score: <span className="score-span">{score}</span>
              </p>
            </li>
            <li className="timer-container">
              <img
                className="timer-img"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
              />
              <p className="second-para">{seconds} sec</p>
            </li>
          </ul>
        </nav>
        {!isGameOver ? (
          <div className="display-container">
            <img
              className="display-img"
              src={this.randImgItem.imageUrl}
              alt="match"
            />
            <ul className="tab-container">
              {tabsList.map(each => (
                <TabItem
                  changeTab={this.changeTab}
                  isActive={each.tabId === selectedTab}
                  key={each.tabId}
                  tabItem={each}
                />
              ))}
            </ul>
            <ul className="thumbnail-container">
              {filterImageList.map(each => (
                <ThumbnailItem
                  validateClickedImg={this.validateClickedImg}
                  key={each.id}
                  imageItem={each}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="gamer-over-container">
            <img
              className="trophy-img"
              src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
              alt="trophy"
            />
            <p className="score-heading">YOUR SCORE</p>
            <p className="game-over-score">{score}</p>
            <button
              onClick={this.playAgain}
              className="play-again-btn"
              type="button"
            >
              <img
                className="reset-img"
                src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                alt="reset"
              />
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default MatchGame
