import './index.css'

const TabItem = props => {
  const {changeTab, tabItem, isActive} = props
  const {tabId, displayText} = tabItem

  const activeClass = isActive ? 'highlight-tab' : ''

  const clickTab = () => {
    changeTab(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${activeClass}`}
        onClick={clickTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
