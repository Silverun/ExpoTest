import useItems from "@/hooks/useItems";
import { View, Text, FlatList } from "react-native";

const ItemsScreen = () => {
  const items = useItems();

  return (
    <View>
      <Text>items</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};
export default ItemsScreen;
