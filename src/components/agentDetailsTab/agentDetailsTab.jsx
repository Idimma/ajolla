import './styles.scss'
import { Drawer } from 'antd';
import TabsComponent from '../Tabs/tabs';
import CloseButton from '../closeBotton/closeBotton';


const AgentDetailsTab = ({ visible, toogleDrawer }) => {
  
  const dashboardTaskDetailsTabs = [
    {
      tabName: 'Details',
      tabContent: <div>details</div>,
      tabIndex: 1
    },
    {
      tabName: 'TimeLine',
      tabContent: <div>Timeline</div>,
      tabIndex: 2
    }
  ]


  return (
    <div className="agent-details-tab">
      <div className="details-tab-drawer">
        <Drawer
          title="Basic Drawer"
          placement="bottom"
          closable={true}
          onClose={() => toogleDrawer()}
          visible={visible}
          getContainer={false}  
          style={{ position: 'absolute' }}
        >
          
        <button onClick={() => toogleDrawer()} className={`close-details-btn ${visible ? 'show-btn' : ''}`}>
          <CloseButton />
        </button>
          
        <TabsComponent tabItems={dashboardTaskDetailsTabs} />
            
        </Drawer>
      </div>
    </div>
   );
}
 
export default AgentDetailsTab;