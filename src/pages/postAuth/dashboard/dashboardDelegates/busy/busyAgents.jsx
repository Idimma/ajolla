import AgentDetails from '../../../../../components/agentDetails/agentDetails'
import { busyAgents } from '../../data'
import './styles.scss'

const BusyAgent = ({showMore}) => {
  return (
    <div className="busy-agent">
      {busyAgents.map(agent => (
        <AgentDetails key={agent.id} agent={agent} showMore={showMore} />
      ))}
      
    </div>
   );
}
 
export default BusyAgent;