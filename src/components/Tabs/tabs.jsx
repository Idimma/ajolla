import { Tabs } from "antd";
import "./styles.scss";

const { TabPane } = Tabs;
const TabsComponent = ({ tabItems, activeTabKey = 1 }) => {
  return (
    <div className="tab-component">
      <Tabs
        tabBarStyle={{ backgroundColor: "#e0e0e0" }}
        defaultActiveKey={activeTabKey}
        onChange
      >
        {tabItems.map((tabItem) => (
          <TabPane
            tab={
              <span>
                {" "}
                {tabItem.tabValue} {tabItem.tabName}
              </span>
            }
            key={tabItem.tabIndex}
          >
            {tabItem.tabContent}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default TabsComponent;
