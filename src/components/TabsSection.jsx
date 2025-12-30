import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function TabsSection({ description, floorPlan, mapUrl }) {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Floor Plan</Tab>
        <Tab>Map</Tab>
      </TabList>

      <TabPanel>
        <p>{description}</p>
      </TabPanel>

      <TabPanel>
        <img src={floorPlan} alt="Floor Plan" style={{ width: "100%" }} />
      </TabPanel>

      <TabPanel>
        <iframe
          src={mapUrl}
          title="Google Map"
          width="100%"
          height="300"
          loading="lazy"
        ></iframe>
      </TabPanel>
    </Tabs>
  );
}

export default TabsSection;
