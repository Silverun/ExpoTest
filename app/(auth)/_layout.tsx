import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="items" />
      <Tabs.Screen name="profile" />
      <Tabs.Screen name="my_lots" />
    </Tabs>
  );
};
export default Layout;
