import { Tabs, Tab } from "@nextui-org/react";

export default function TabPlanes({ item1, item2, item3 }) {
  return (
    <div className="w-100 flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="Flor" title="Flor">
          {item1}
        </Tab>
        <Tab key="Santi" title="Santi">
          {item2}
        </Tab>
        <Tab key="Fusion" title="Fusion">
          {item3}
        </Tab>
      </Tabs>
    </div>
  );
}
