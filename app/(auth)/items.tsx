import { renderItem } from "@/components/item/ItemList";
import useItems from "@/hooks/useItems";
import { View, Text, FlatList } from "react-native";

const ItemsScreen = () => {
  const items = useItems();

  return (
    <View>
      <FlatList data={items} renderItem={({ item }) => renderItem(item)} />
    </View>
  );
};
export default ItemsScreen;
