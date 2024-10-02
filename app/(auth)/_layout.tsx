import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="items" />
    </Tabs>
  );
};
export default Layout;
