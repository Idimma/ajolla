import AgentDetails from '../../../../../components/agentDetails/agentDetails'
import { freeAgents } from '../../data'
import './styles.scss'

const FreeAgents = ({showMore}) => {
  return (
    <div className="free-agents">
      {freeAgents.map(agent => (
        <AgentDetails key={agent.id} agent={agent} showMore={showMore} />
      ))}      
    </div>
   );
}
 
export default FreeAgents;