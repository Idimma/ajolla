import './styles.scss'

const AgentDetails = ({ agent, showMore }) => {
  return (
    <div className="single-agent-detail" onClick={()=> showMore(agent.id)}>
      <div className="agent-image">
        <img src="https://tookan.s3.amazonaws.com/fleet_thumb_profile/thumb-EqMX1610877352703-cbDD1610877352102channellogo.jpg" alt="" />
        <div className={`status-dot
        ${agent.status === 'busy' ? 'busy' :
          agent.status === 'free' ? 'free' : ''
        } `}></div>
      </div>
      <div className="agent-details">
        <p className="agent-name">{ agent.name }</p>
        <p className="agent-number">{ agent.phone }</p>
        <p className="team-name">{ agent.team }</p>
      </div>
      <div className="message-agent">
        <svg width="34" height="34" viewBox="0 0 300 277" style={{ marginRight: '5px', marginBottom: '3px' }} xmlns="http://www.w3.org/2000/svg"><defs><path id="a" d="M0 .836h250.587V250H0z"></path></defs><g style={{fill: "none", fillRule: "evenodd"}}><g><mask id="b" fill="#fff"><use href="#a"></use></mask><path fill="#2295FF" d="M67.384 206.484c3.659.19 6.748.117 9.003 0V250a202.553 202.553 0 0 1 5.54-5.54c8.597-8.273 17.771-15.643 23.894-19.739 17.738-11.865 37.402-14.675 46.979-16.044 12.335-1.763 17.606-.742 35.405-4.007 12.894-2.367 17.862-4.32 19.881-5.162 3.993-1.663 15.833-6.747 25.946-18.545 13.763-16.057 15.677-34.45 16.481-42.176.117-1.122.079-9.197 0-25.3-.084-16.987-.129-25.537-.246-28.296-.833-19.614-1.249-29.422-4.814-38.652-6.838-17.705-19.71-27.909-24.133-31.139-13.29-9.707-26.407-12.052-35.81-13.624C177.574.45 174.42.877 156.318.998c-19.934.133-19.587-.36-79.406-.059-1.942.01-5.138.034-9.34.448-4.328.427-16.696 1.646-28.414 7.396C22.124 17.14 13.524 31.604 10.744 36.42 2.838 50.11 1.659 62.59.235 77.677c-.432 4.565-.167 4 0 38.535.104 21.642.007 23.21.778 27.635 1.109 6.37 3.744 20.534 14.402 34.642 12.513 16.565 29.363 24.152 37.756 26.08 6.633 1.523 14.213 1.915 14.213 1.915" mask="url(#b)"></path></g><path fill="#FEFEFE" d="M100 107c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10M174 107c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10M137 107c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10"></path></g></svg>
      </div>
      <div className="task-count">
        { agent.totalTask }
      </div>
      <div className="task-remaining">
          Remaining Task: { agent.taskRemaining}
        </div>
      <span className="material-icons show-more-icon" >
        keyboard_arrow_right
      </span>
    </div>
   );
}
 
export default AgentDetails;