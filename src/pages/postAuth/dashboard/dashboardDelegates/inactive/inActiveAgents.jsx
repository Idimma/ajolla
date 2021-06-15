import './styles.scss'
import { inactiveAgents } from '../../data'
import AgentDetails from '../../../../../components/agentDetails/agentDetails'

const InActiveAgents = ({showMore}) => {
  return (
    <div className="inactive-agent">
      {inactiveAgents.map(agent => (
        <AgentDetails key={agent.id} agent={agent} showMore={showMore} />
      ))}
    </div>
   );
}
 
export default InActiveAgents;