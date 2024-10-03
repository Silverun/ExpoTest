import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./ItemList.styles";
import { Item } from "@/store/items/items.types";

export const renderItem = (item: Item) => (
  <TouchableOpacity>
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.category}>Category: {item.category}</Text>
      <Text style={styles.price}>Price: ${item.price.toFixed(2)}</Text>
    </View>
  </TouchableOpacity>
);
