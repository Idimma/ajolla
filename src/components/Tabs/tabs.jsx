import { Tabs } from 'antd'
import './styles.scss'


const { TabPane } = Tabs
const TabsComponent = ({ tabItems, activeTabKey = 1 }) => {

  const tabchange = (activeKey) => {
  // console.log(activeKey);
}

  return (
    <div className="tab-component">
      <Tabs tabBarStyle={{ backgroundColor: '#eaedf0'}} defaultActiveKey={activeTabKey} onChange={tabchange}>
        {
          tabItems.map( tabItem => (
            <TabPane tab={<span> {tabItem.tabValue} {tabItem.tabName}</span>} key={tabItem.tabIndex}>
              {tabItem.tabContent}
            </TabPane>
          ))
        }
      </Tabs>

     
    
    </div>
  )
}

export default TabsComponent
