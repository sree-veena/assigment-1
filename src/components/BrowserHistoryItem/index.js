import './index.css'

const BrowserHistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="history">
      <div className="history-details">
        <p className="time">{timeAccessed}</p>
        <div className="site-detail">
          <img src={logoUrl} alt="domain logo" className="icon" />
          <p className="title">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-btn"
        onClick={onDeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistoryItem
